import supabase from "./supabase";

// export async function getPosts(category = null) {
export async function getPosts(category: string | null = null) {
  try {
    let query = category
      ? supabase.from("Posts").select("*").eq("Category", category)
      : supabase.from("Posts").select("*");

    // Execute query
    const { data, error } = await query;
    console.log(data);
    if (error) {
      console.error("Error fetching posts:", error.message);
      return { data: [], error };
    }

    return { data, error: null };
  } catch (error) {
    console.error("Unexpected error in getPosts:", error);
    return { data: [], error };
  }
}
// export const getPosts = async (category: string | null | undefined) => {
//   try {
//     let query = supabase.from('posts').select('*');

//     if (category) {
//       query = query.eq('Category', category);
//     }

//     return await query;
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     throw error;
//   }
// };
// // This function could be added to support server-side pagination if needed in the future
// export async function getPostsPaginated(
//   category = null,
//   page = 1,
//   pageSize = 4
// ) {
//   try {
//     // Calculate range for pagination
//     const from = (page - 1) * pageSize;
//     const to = from + pageSize - 1;

//     let query = supabase
//       .from("Posts")
//       .select("*", { count: "exact" })
//       .range(from, to);

//     // Apply category filter if provided
//     if (category) {
//       query = query.eq("Category", category);
//     }

//     // Execute query
//     const { data, error, count } = await query;

//     if (error) {
//       console.error("Error fetching posts:", error.message);
//       return { data: [], count: 0, error };
//     }

//     return { data, count, error: null };
//   } catch (error) {
//     console.error("Unexpected error in getPostsPaginated:", error);
//     return { data: [], count: 0, error };
//   }
// }
