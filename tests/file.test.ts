
import * as fs from 'fs';
import {is_readonly, make_readonly} from '../src/utils/fun'
describe("计算器函数", () => {
  it("应该正确计算加法", () => {
    expect(1 + 2).toBe(3);
  });

  it("应该正确计算减法", () => {
    expect(3 - 2).toBe(1);
  });
});


describe("文件属性修改",()=>{
  const filename = 'test.txt'
  beforeAll(()=>{
    fs.writeFileSync(filename, 'Hello World!');
  })

  it("判断文件是否只读", async ()=>{
    const filePath = fs.realpathSync(filename);
    const file_readable = await is_readonly(filePath);
    expect(file_readable).toBeFalsy()
    await make_readonly(filePath)
    const file_after = await is_readonly(filePath);
    expect(file_after).toBeTruthy()

  })

  afterAll(()=>{
    // remove the file
    fs.unlinkSync('test.txt');
  })
})


