"use client";

import { useAuth, useOrganizationList, useUser } from "@clerk/nextjs";
import { useEffect, useRef, useState } from "react";

export default function OrganizationProvisioner() {
  const { orgId } = useAuth();
  const { isLoaded: isUserLoaded, user } = useUser();
  const { createOrganization, isLoaded, setActive, userMemberships } =
    useOrganizationList({ userMemberships: true });
  const attemptedUserId = useRef<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded || !isUserLoaded || !user || orgId) {
      return;
    }

    if (userMemberships.isError) {
      console.error(
        "Error loading organization memberships:",
        userMemberships.error,
      );
      setErrorMessage(
        "We couldn't load your organizations. Please refresh the page to try again.",
      );
      return;
    }

    if (userMemberships.isLoading || attemptedUserId.current === user.id) {
      return;
    }

    attemptedUserId.current = user.id;
    setErrorMessage(null);

    const organizationName = user.fullName
      ? `${user.fullName}'s Organization`
      : user.firstName
        ? `${user.firstName}-organization`
        : user.username
          ? `${user.username}-organization`
          : user.primaryEmailAddress?.emailAddress
            ? `${user.primaryEmailAddress.emailAddress}-organization`
            : "My Organization";

    const activateOrganization = async () => {
      try {
        const membership = userMemberships.data[0];
        const organization = membership
          ? membership.organization
          : await createOrganization({ name: organizationName });

        await setActive({ organization: organization.id });
      } catch (error) {
        console.error("Error provisioning the user's organization:", error);
        setErrorMessage(
          "We couldn't set up your organization. Please refresh the page to try again.",
        );
      }
    };

    void activateOrganization();
  }, [
    createOrganization,
    isLoaded,
    isUserLoaded,
    orgId,
    setActive,
    user,
    userMemberships.data,
    userMemberships.error,
    userMemberships.isError,
    userMemberships.isLoading,
  ]);

  if (!errorMessage) {
    return null;
  }

  return (
    <p className="p-3 text-center text-sm text-destructive" role="alert">
      {errorMessage}
    </p>
  );
}