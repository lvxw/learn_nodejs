/**
 * 使用fs模块,实现自动化构建项目骨架的程序
 * 在当前目录穿件一个文件夹
 * project
 *  - css
 *  - js
 *  - images
 *  -index.html
 *
 */

var fs = require('fs');

var projectData = {
    'name':'myProject',
    'fileData':[
        {
            'name':'css',
            'type':'dir'
        },
        {
            'name':'js',
            'type':'dir'
        },
        {
            'name':'images',
            'type':'dir'
        },
        {
            'name':'index.html',
            'type':'file',
            'content':'<!DOCTYPE html>\n' +
            '<html lang="en">\n' +
            '<head>\n' +
            '    <meta charset="UTF-8">\n' +            '    <title>Title</title>\n' +
            '</head>\n' +
            '<body>\n' +
            '    <div>\n' +
            '        <p>\n' +
            '            <h1>Hello world</h1>\n' +
            '        </p>\n' +
            '    </div>\n' +
            '</body>\n' +
            '</html>'
        }
    ]
};

if(projectData.name){
    fs.mkdirSync(projectData.name)

    var fileData = projectData.fileData;

    if(fileData && fileData.forEach){
        fileData.forEach(function (f) {
            var path = projectData.name+'/'+f.name
            f.content = f.content || ''
            switch (f.type){
                case 'dir':
                    fs.mkdirSync(path)
                    break;
                case 'file':
                    fs.writeFileSync(path,f.content);
                    break;
                default:
                    break;
            }
        })
    }
}
