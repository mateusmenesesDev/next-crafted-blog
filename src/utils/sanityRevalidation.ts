/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

export function sanityRevalidation(originalAction: any) {
  const actionWithRevalidation = (props: any) => {
    const originalResult = originalAction(props);
    return {
      ...originalResult,
      onHandle: async () => {
        originalResult.onHandle();
        const path = props.draft
          ? props.draft.slug.current
          : props.published.slug.current;

        const paths = ["/", `/${path}`];

        for (const path of paths) {
          await fetch("/api/revalidate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ path }),
          });
        }
      },
    };
  };

  return actionWithRevalidation;
}
