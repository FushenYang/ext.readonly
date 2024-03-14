import { getSelectedFinderItems, showHUD } from "@raycast/api"
import { is_readonly, make_readonly } from './utils/fun'


export default async () => {
  try {
    const fileSystemItems = await getSelectedFinderItems();
    const files = fileSystemItems.map(item => item.path);
    const promises = [];
    for (const f of files) {
      if (!( await is_readonly(f))) {
        promises.push(make_readonly(f));
      }
    }
    await Promise.all(promises);
    //console.log(result)
    showHUD(`选中${fileSystemItems.length}个文件,均以标记为只读`);
  } catch (err) {
    showHUD('当前尚未选中文件');
  }
};
