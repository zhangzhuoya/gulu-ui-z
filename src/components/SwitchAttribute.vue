<template>
  <h3 id="attributes">
    <a aria-hidden="true" class="header-anchor">¶</a>
    Attributes
  </h3>
  <table class="table-container">
    <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      [{"parameter":"size","explain":"尺寸"："type"：string},{"Optional":"--"},{"default":""}]
      <tr>
        <td>value / v-model</td>
        <td>绑定值</td>
        <td>boolean / string / number</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>width</td>
        <td>switch 的宽度（像素）</td>
        <td>number</td>
        <td>—</td>
        <td>40</td>
      </tr>
      <tr>
        <td>active-icon-class</td>
        <td>switch 打开时所显示图标的类名，设置此项会忽略 <code>active-text</code></td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>inactive-icon-class</td>
        <td>
          switch 关闭时所显示图标的类名，设置此项会忽略
          <code>inactive-text</code>
        </td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>active-text</td>
        <td>switch 打开时的文字描述</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>inactive-text</td>
        <td>switch 关闭时的文字描述</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>active-value</td>
        <td>switch 打开时的值</td>
        <td>boolean / string / number</td>
        <td>—</td>
        <td>true</td>
      </tr>
      <tr>
        <td>inactive-value</td>
        <td>switch 关闭时的值</td>
        <td>boolean / string / number</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>active-color</td>
        <td>switch 打开时的背景色</td>
        <td>string</td>
        <td>—</td>
        <td>#409EFF</td>
      </tr>
      <tr>
        <td>inactive-color</td>
        <td>switch 关闭时的背景色</td>
        <td>string</td>
        <td>—</td>
        <td>#C0CCDA</td>
      </tr>
      <tr>
        <td>name</td>
        <td>switch 对应的 name 属性</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>validate-event</td>
        <td>改变 switch 状态时是否触发表单的校验</td>
        <td>boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#attributes {
  margin: 55px 0 20px;
  .header-anchor {
    display: none;
    float: left;
    margin-left: -20px;
    opacity: 1;
    cursor: pointer;
    font-weight: 400;
    font-size: 22px;
    color: #409eff;
    margin-left: -15px;
    margin-top: -3px;
  }
  &:hover {
    .header-anchor {
      display: block;
    }
  }
}
.table-container {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
      th {
        text-align: left;
        white-space: nowrap;
        color: #909399;
        font-weight: 400;
        border-bottom: 1px solid #dcdfe6;
        padding: 15px;
        max-width: 250px;
      }
    }
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    tr {
      td {
        border-bottom: 1px solid #dcdfe6;
        padding: 15px;
        max-width: 250px;
        color: #606266;
      }
    }
  }
}
</style>
