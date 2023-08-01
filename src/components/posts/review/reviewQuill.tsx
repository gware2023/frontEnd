import React, { useEffect, useMemo } from "react";
import "react-quill/dist/quill.snow.css";

interface ReviewQuillProps {
  className: string;
}

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ReviewQuill({ className }: ReviewQuillProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [reviewText, setReviewText] = React.useState("");

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, "link"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
                "custom-color",
              ],
            },
            { background: [] },
          ],
          ["image", "video"],
          ["clean"],
          ["submit"],
        ],
      },
    }),
    []
  );

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleChange = (value: string) => {
    setReviewText(value);
  };

  return (
    <>
      <ReactQuill
        modules={modules}
        value={reviewText}
        onChange={handleChange}
        placeholder="Please write comment."
      />
    </>
  );
}
