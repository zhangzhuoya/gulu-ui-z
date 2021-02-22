<template>
  <h3 id="attributes">
    <a aria-hidden="true" class="header-anchor">¶</a>
   <span>
    Attributes
    </span>
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
      <tr>
        <td>visible</td>
        <td>是否显示 Dialog</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>title</td>
        <td>Dialog 的标题，也可通过具名 slot传入</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>close-on-click-overlay</td>
        <td>是否可以通过点击 modal 关闭 Dialog</td>
        <td>boolean</td>
        <td>—</td>
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
    margin-top: 5px;
  }
  &:hover {
    .header-anchor {
      display: block;
    }
  }
  span{
    font-size: 32px;
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
