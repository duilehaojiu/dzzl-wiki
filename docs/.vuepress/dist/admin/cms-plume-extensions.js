// cms-plume-extensions.js
// 为 Decap CMS 添加 Plume 主题的自定义编辑器组件

if (typeof CMS !== 'undefined') {
  // -------------------- 提示容器 (note/info/tip/warning/caution/details) --------------------
  CMS.registerEditorComponent({
    id: "plume-container",
    label: "提示容器 (Plume)",
    fields: [
      {
        name: 'type',
        label: '容器类型',
        widget: 'select',
        options: ['note', 'info', 'tip', 'warning', 'caution', 'details'],
        default: 'tip',
        hint: '选择提示框的类型样式'
      },
      {
        name: 'title',
        label: '自定义标题（可选）',
        widget: 'string',
        required: false,
        hint: '留空则使用默认标题'
      },
      {
        name: 'content',
        label: '内容',
        widget: 'markdown'
      }
    ],
    pattern: /^::: (note|info|tip|warning|caution|details)(?:\s+(.*?))?\n(.*?)\n:::$/ms,
    fromBlock(match) {
      return {
        type: match[1],
        title: match[2] || '',
        content: match[3]
      };
    },
    toBlock(data) {
      const titlePart = data.title ? ` ${data.title}` : '';
      return `::: ${data.type}${titlePart}\n${data.content}\n:::`;
    },
    toPreview(data) {
      const styles = {
        note: { bg: '#f0f4f8', border: '#9aa9b9' },
        info: { bg: '#e6f7ff', border: '#69c0ff' },
        tip: { bg: '#f6ffed', border: '#95de64' },
        warning: { bg: '#fffbe6', border: '#ffd666' },
        caution: { bg: '#fff2f0', border: '#ffccc7' },
        details: { bg: '#f9f9f9', border: '#d9d9d9' }
      };
      const style = styles[data.type] || styles.tip;
      const titleHtml = data.title ? `<strong style="font-weight: 600;">${data.title}</strong><br>` : '';
      return `<div style="background-color: ${style.bg}; border-left: 4px solid ${style.border}; border-radius: 4px; padding: 12px 16px; margin: 16px 0; font-family: system-ui, -apple-system, sans-serif;">${titleHtml}<div>${data.content}</div></div>`;
    }
  });

  // -------------------- 隐秘文本 (plot) --------------------
  CMS.registerEditorComponent({
    id: "plume-plot",
    label: "隐秘文本 (Plume)",
    fields: [
      {
        name: 'content',
        label: '需要隐藏的内容',
        widget: 'string',
        hint: '这部分内容在页面上会被遮住或模糊'
      },
      {
        name: 'effect',
        label: '遮罩效果',
        widget: 'select',
        options: [
          { label: '遮罩层 (mask)', value: 'mask' },
          { label: '文本模糊 (blur)', value: 'blur' }
        ],
        default: 'mask'
      },
      {
        name: 'trigger',
        label: '触发方式',
        widget: 'select',
        options: [
          { label: '鼠标悬停 (hover)', value: 'hover' },
          { label: '点击 (click)', value: 'click' }
        ],
        default: 'hover'
      }
    ],
    pattern: /^!!(.*?)!!(?:{(.*?)})?$/,
    fromBlock(match) {
      return {
        content: match[1],
        classAttr: match[2] || ''
      };
    },
    toBlock(data) {
      const classes = [data.effect, data.trigger].filter(Boolean).join(' ');
      return `!!${data.content}!!{${classes}}`;
    },
    toPreview(data) {
      let style = '';
      if (data.effect === 'mask') {
        style = 'background-color: #2c3e50; color: #2c3e50; border-radius: 4px;';
      } else if (data.effect === 'blur') {
        style = 'filter: blur(4px);';
      }
      const triggerHint = data.trigger === 'hover' ? '（悬停可见）' : '（点击可见）';
      return `<span style="cursor: pointer; transition: all 0.3s; ${style}" title="预览效果：${triggerHint}">${data.content}</span>`;
    }
  });

  // -------------------- 步骤容器 (steps) --------------------
  CMS.registerEditorComponent({
    id: "plume-steps",
    label: "步骤容器 (Plume)",
    fields: [
      {
        name: 'title',
        label: '标题（可选）',
        widget: 'string',
        required: false
      },
      {
        name: 'content',
        label: '步骤列表（每行一个步骤，支持Markdown）',
        widget: 'text',
        hint: '每行一个步骤，可以使用Markdown语法'
      }
    ],
    pattern: /^:::: steps(?:\s+(.*?))?\n(.*?)\n::::$/ms,
    fromBlock(match) {
      return {
        title: match[1] || '',
        content: match[2]
      };
    },
    toBlock(data) {
      const titlePart = data.title ? ` ${data.title}` : '';
      return `:::: steps${titlePart}\n${data.content}\n::::`;
    },
    toPreview(data) {
      const titleHtml = data.title ? `<h4 style="margin-top:0;">${data.title}</h4>` : '';
      const steps = data.content.split('\n').filter(line => line.trim() !== '');
      const stepsHtml = steps.map((step, index) => {
        return `<li style="margin-bottom:8px;"><strong>${index+1}.</strong> ${step}</li>`;
      }).join('');
      return `<div style="border-left: 4px solid #8c8c8c; background-color: #fafafa; padding: 12px 20px; margin: 16px 0; border-radius: 4px;">${titleHtml}<ol style="padding-left:20px; margin:0;">${stepsHtml}</ol></div>`;
    }
  });

  // -------------------- 标记容器 (mark) --------------------
//   CMS.registerEditorComponent({
//     id: "plume-mark",
//     label: "标记容器 (Plume)",
//     fields: [
//       {
//         name: 'content',
//         label: '内容',
//         widget: 'markdown',
//         hint: '需要高亮标记的内容'
//       }
//     ],
//     pattern: /^::: mark\n(.*?)\n:::$/ms,
//     fromBlock(match) {
//       return {
//         content: match[1]
//       };
//     },
//     toBlock(data) {
//       return `::: mark\n${data.content}\n:::`;
//     },
//     toPreview(data) {
//       return `<div style="background-color: #fffbe6; border-left: 4px solid #faad14; padding: 12px 16px; margin: 16px 0; border-radius: 4px;">${data.content}</div>`;
//     }
//   });
} else {
  console.error('CMS not loaded. Make sure Decap CMS script is included before this script.');
}