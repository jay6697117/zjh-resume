import "./style.less";

export default function Download() {
  const href = "/曹慧琳简历-前端工程师-4年-2020.pdf";
  return (
    <div className="download">
      <a href={href} target="_blank">
        PDF 下载
      </a>
    </div>
  );
}
