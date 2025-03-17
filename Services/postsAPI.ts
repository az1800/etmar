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
export async function postArticle(
  category: string,
  content: string,
  title: string,
  postLink: string,
  postImage?: string
) {
  try {
    const { data, error } = await supabase
      .from("Posts")
      .insert([
        {
          Category: category,
          Title: title,
          Content: content,
          post_image:
            postImage ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEXp7vG6vsHs8fS3u76/w8bM0NPHzM/T2Nu8wMPh5ejc4eTm6+61ubzFyczN0dTk6ezZ3eCrc+moAAAC50lEQVR4nO3c7W6CMBSAYThVUBDl/q92A/wAWtRKG9LD+/xZssxlvGlZi0iWAQAAAAAAAAAAAAAAAAAAAAAAAACwLxLH1oe1grTHQwRNWadaRaqTyaMw5ppmFCkvcYr0VQ5JRqkiJvmP0iQYRWIW6aK0Wx+hvzbSueQpvdkjxfCXn4rgmqH2pd76GH3JYUgSY3VS9lFMtfUx+pJT3+QYY4CfaWKhiY0mNlVNAm3gFDWRuiyapli/gVPTROrCDMdiipVVtDSRarSuNdWqKFqaTHeE66IoaVLPdj9mzcJcR5PH7udlzVZfR5P5MPnfwd1+/90qmtx3bZPJU/4+UHQ0sabOp8kj5zfjSEeTg93k7SUhuZl8+Sy8yyZdknw5io4mfnNnSLIcRUcTr3PsI8liFBVNspvH/2IZ/bA7io4m0nw9dWTSzxlFRxN7bb80TGQ2pFxRlDSRdroHbBeGiZzns8wRRUmT2bWCxST2iccRRUuTTOrmcU2puXkkcURR06Q74rLpbh5ZKuKYOO4oipp8ukbtHiWOKKqavH/Fwiixo+ymybsksyh7afI+yTTKTpp8SjKJso8mn5OMo6hsIrNN8TdJRlE0NpHrpRh//7skrygKm8jV5GYU5dskzzeF9DXpkuSjKF8neUZR12RI8orikSQ35/4l2po8kjyi+CRR2uSVZLgV2iuJzibjJH0UryQqm0yTdFH8brZW2GSexJu+JquT6GuyPom6JgGSaGsSIomyJnIM8XEeVU2CjBJdTQIl0dXEcU8OTWiS0cSFJjaa2Ghio4mNJrZZExPERVOTMhBV72UE+lT+8MuUNAmKJjaa2BJvUtDk5bEkqQOdXceK8WIlIXK8L7PCrNYmK7f7l60P0V8VocZEgg/eCrWeX5Le1MlcnykOmiTJJ/l53jPg55Jkkk5hTIxzrDGndQ/G2JLU7fUY3LU8J1ukF2F5kvTjYwEAAAAAAAAAAAAAAAAAAAAAAAAA+MEflIYuWPo6q+0AAAAASUVORK5CYII=",
          Post_Link: postLink,
        },
      ])
      .select();

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
