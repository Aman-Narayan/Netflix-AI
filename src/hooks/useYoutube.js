import { useEffect, useState } from "react";

const YT_API_KEY = process.env.REACT_APP_YouTube_API; // put in .env instead of hardcoding

export function useYoutubeData(videoId) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!videoId) return;

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${YT_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.items && res.items.length > 0) {
          const { snippet, statistics } = res.items[0];
          setData({
            title: snippet.title,
            description: snippet.description,
            likeCount: statistics.likeCount,
            viewCount: statistics.viewCount,
          });
        }
      })
      .catch((err) => console.error("YouTube API error:", err));
  }, [videoId]);

  return data;
}
