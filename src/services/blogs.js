import { checkError, client } from './client';

export async function getBlogs() {
  // call supabase and get blog cards
  const response = await client.from('blogs').select('*, authors( name )');
  return checkError(response);
}
