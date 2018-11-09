export default {
  mark: 'NKN',
  nsNav: {
    signOut: '注销',
    resetNodeMining: '重置 @:mark 矿机'
  },
  nsFooter: {
    copyright: 'Copyright {i} 2017-2018 @:mark    |    版权所有',
    attention: '目前软件正处于早期研发阶段，可能存在部分问题。请勿用于正式途径。 '
  },
  nsInput: {
    account: {
      title: '矿机账号',
      placeholder: '请输入您的 @:mark 矿机账号',
      errorInfo: '仅允许输入字母数字！'
    },
    password: {
      title: '矿机密码',
      placeholder: '请输入您的 @:mark 矿机密码',
      errorInfo: '仅允许8-20个字符！'
    },
    rePassword: {
      title: '确认矿机密码',
      placeholder: '请再次输入您的 @:mark 矿机密码',
      errorInfo: '两次输入的矿机密码不一致！'
    },
    sn: {
      title: '序列号',
      placeholder: '请输入您的序列号',
      errorInfo: '您输入的序列号有误！'
    },
    wallet: {
      title: ' ',
      placeholder: '请上传你的钱包文件',
      errorInfo: '请选择并上传你的钱包文件！'
    },
    walletPassword: {
      title: '钱包密码',
      placeholder: '请输入您上传钱包的密码',
      errorInfo: '您输入的密码和钱包不匹配！'
    }
  },
  nsSignIn: {
    titleLabel: '欢迎来到',
    title: '@:mark 节点',
    signInbtn: '登陆',
    loginfail:'登陆失败！'
  },
  nsMain: {
    node: {
      title: '节点连接',
      on: '开',
      off: '关',
      mining:{
        fail: '开启矿机失败。请检查服务器日志。',
        error: "您不能在节点更新时开启矿机。",
        stopfail: '关闭矿机失败。请检查服务器日志。'
      },
      nodeStatus:{
        prefix: '节点状态：',
        init: '@:nsMain.node.nodeStatus.prefix 同步中 ...',
        starting: '正在开启',
        updating: '@:nsMain.node.nodeStatus.prefix 更新中',
        stopping: '正在关闭',
        stoped: '@:nsMain.node.nodeStatus.prefix 已关闭',
        syncing: '@:nsMain.node.nodeStatus.prefix 同步中',
        persisting: '@:nsMain.node.nodeStatus.prefix 同步完成',
        mining: '@:nsMain.node.nodeStatus.prefix 挖矿中'
      },
      version: {
        init: '正在查询版本 ...'
      },
      NKNBlockHeight: '@:mark 网络区块高度：',
      myBlockHeight: '我的区块高度：'
    },
    wallet: {
      title: '我的钱包',
      downloadbtn: '下载',
      transferbtn: '转账',
      addressLabel: '地址',
      balance: {
        init: '正在查询余额 ...'
      },
      balanceLabel: '我的余额',
      balanceUnit: '@:mark'
    },
    neighbors: {
      title: '相邻节点',
      ID: '节点ID',
      IP: '节点IP',
      port: '节点端口'
    },
    rewards: {
      title: '近期挖矿奖励',
      transaction: '交易编号',
      value: '交易数量',
      height: '交易高度',
      time: '交易时间'
    },
    transfer: {
      title: '@:mark 转账',
      addressPlaceholder: '请输入转账目标地址',
      countPlaceholder: '请输入您想转移的 @:mark 数量',
      passwordPlaceholder: '请输入签保密吗',
      cancel: '取消',
      confirm: '确认转账',
      alertInfo: {
        default: '转账失败！'
      }
    },
    resetdlg: {
      title: '矿机重置确认',
      warning: '警告：该操作将会重置包括您钱包在内的所有的 @:mark 数据！',
      passwordPlaceholder: '请输入您的 @:mark 矿机密码',
      cancel: '取消',
      reset: '重置',
      alertInfo: {
        wrongPass: '密码有误！',
        success: '重置矿机成功！'
      }
    }
  },
  nsCreateAccount: {
    titleLabel: '设置 - 第一步',
    title: '创建账号',
    nextStepbtn: '下一步'
  },
  nsGenWallet: {
    titleLabel: '设置 - 第二步',
    title: 'Generate wallet',
    link: 'Load wallet',
    nextStepbtn: 'NEXT'
  },
  nsLoadWallet: {
    titleLabel: '设置 - 第二步',
    title: 'Load wallet',
    upload: 'Select file',
    link: 'Generate wallet',
    nextStepbtn: 'NEXT',
    netWorkError: 'Network error, please try again later.'
  },
  nsShowWallet: {
    titleLabel: 'setup - step 3',
    title: 'Download wallet',
    privateKey: 'Private key',
    address: 'Wallet address',
    signInbtn: 'Sign in',
    downloadbtn: 'Download wallet'
  }
}