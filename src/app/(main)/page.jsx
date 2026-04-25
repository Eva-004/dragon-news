import { redirect } from "next/navigation";



export default async function Home() {
   const defaultNewsCategoryId = '01';
  return (
   redirect(`/category/${defaultNewsCategoryId}`)
  );
}
