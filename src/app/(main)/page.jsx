import { redirect } from "next/navigation";

export const metadata = {
  title: 'Dragon News',
}
export default async function Home() {
   const defaultNewsCategoryId = '01';
  return (
   redirect(`/category/${defaultNewsCategoryId}`)
  );
}
