/** node study.js
 * 不可以使用 DOM，BOM 等 API，但是 console.log 和定时器可以继续使用
 */

// Buffer 缓冲区，表示固定长度的字节序列
// Buffer 大小无法调整，是对计算机内存进行直接操作所以性能较好，每个元素的大小均为 1 字节
let buf_1 = Buffer.alloc(10)
// allocUnsafe 并不会对内存空间置 0，所以速度会稍微快一些
let buf_2 = Buffer.allocUnsafe(10)
let buf_3 = Buffer.from('hello')

const fs = require('fs')
// fs 文件系统，实现与硬盘的交互
fs.writeFile('./test.txt', 'test for fs moudle', err => {
    if (err) {
        console.log('写入失败')
        return
    }
    console.log('写入成功')
})
// fs.writeFileSync 方式可以实现同步执行，但是没有回调函数
// fs.appendFile 追加写入
fs.writeFile('./test.txt', '\r\nHello', {flag: 'a'}, err => {
    if (err) {
        console.log('追加失败')
        return
    }
    console.log('追加成功')
})
// 流式写入，适合频繁写入的场景
const ws = fs.createWriteStream('./test.txt')
ws.write('第一次流写入\r\n')
ws.write('第二次流写入\r\n')
ws.close()
fs.readFile('./test.txt', (err, data) => {
    if (err) {
        console.log('读取失败')
        return
    }
    console.log(data.toString())
})
// fs.createReadStream 使用内存空间较小
const rs = fs.createReadStream('./test.txt')
rs.on('data', chunk => {
    console.log(chunk.length)
})
rs.on('end', () => {
    console.log('读取完成')
})
// fs.pipe(ws) 直接通过管道传输复制
// fs.rename(old_file_path, new_file_path, callback) 文件重命名与移动
// fs.unlink(file_path, callback) 文件删除
// fs.rm(file_path, callback) 文件删除
// fs.mkdir(dir_path，{recursive: true 是否允许递归创建}, callback) 创建文件夹
// fs.readdir(dir_path, (err, data) => {}) 读取文件夹中内容
// fs.rm(dir_path, {recursive: true 是否允许递归删除}, callback) 删除文件夹，也可以使用 fs.rmdir
// fs.stat(file_path, (err, data) => {}) 查看文件状态，data 为文件状态信息

const path = require('path')
// 获取路径的分隔符
// console.log(path.sep)
// 拼接规范的绝对路径
// console.log(path.resolve(__dirname, 'test.txt'))
// 解析路径
// console.log(path.parse(__dirname + '/test.txt'))
// 获取路径基本名称
console.log(path.basename(__dirname + '/test.txt'))
// 获取文件扩展名
console.log(path.dirname(__dirname + '/test.txt'))
// 获取路径的扩展名
console.log(path.extname(__dirname + '/test.txt'))


