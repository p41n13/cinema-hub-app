export type SearchParams = Record<string, string> | null | undefined;

export interface HomePageProps {
  searchParams: SearchParams;
}
