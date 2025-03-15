import supabase from "./supabase";

export default async function getMembers() {
  let { data, error } = await supabase
    .from("Members")
    .select("id,full_Name,Position,Committee,Gender");
  if (error) {
    console.log(error);
  }
  // console.log(data);
  return data;
}
