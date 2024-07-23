export interface ContentLanguage {
  id: string;
  title: string;
}

export interface ContentProps {
  id: number;
  title: string;
  jenis: string;
  semester?: string;
  slug: string;
  description: string;
  image: string;
  is_new: boolean;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  is_show: boolean;
  content: unknown;
}

export interface SubContentProps {
  parent: string;
  contentSlug: string;
  subContentSlug: string;
  title: string;
  language?: string;
  difficulty?: string;
  access: boolean;
}

export interface SubContentMetaProps {
  id: number;
  chapter_id?: number;
  chapter_title?: string;
  title: string;
  category: string;
  language?: string;
  difficulty?: string;
  source?: string;
  cover_url?: string;
  source_url?: string;
  created_at: string;
  updated_at: string;
  is_playground: boolean;
  playground?: string;
  is_comment: boolean;
  initial_code?: string;
  access: boolean;
}

export interface MdxFileContentProps {
  slug: string;
  frontMatter: SubContentMetaProps;
  content: string;
}

export interface ChapterGroupProps {
  chapter_id: number | undefined;
  chapter_title: string;
  contents: MdxFileContentProps[];
}
