import * as fs from "fs";
export const make_readonly = async (filePath: string) => {
  fs.chmodSync(filePath, "444");
  return filePath;
};
export const is_readonly = async (filepath: string) => {
  const stats = await fs.promises.stat(filepath);
  const isReadOnly = !(stats.mode & 0o200); // 判断文件是否为只读
  return isReadOnly;
};
