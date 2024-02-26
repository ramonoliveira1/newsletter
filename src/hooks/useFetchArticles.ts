import { useEffect, useState } from "react";
import { ArticleType } from "../types";

export default function useFetchArticles() {
  const [articles, setArticles] = useState<ArticleType[]>([])

    useEffect(() => {
      const fetchArticles = async (url: string) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles', error);
      }};
      fetchArticles('https://raw.githubusercontent.com/cardozov/alura-newsletter/aula3/articles.json');
    }, []);

    return { articles }
  }
