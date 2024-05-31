import "./globals.css";

export const metadata = {
  title: "我的next项目",
  description: "next搭建的项目",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>这是根节点--layout</div>
        {children}
      </body>
    </html>
  );
}
