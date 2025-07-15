import { stringify } from "qs";

export function articlesContainingTags(tags: string[]) {
  return stringify(
    {
      filters: {
        tags: { label: { $contains: tags } },
      },
      fields: ["title", "description", "urlTitle"],
      populate: {
        poster: {
          fields: ["url", "alternativeText", "formats"],
        },
      },
    },
    // { encode: false }
  );
}
