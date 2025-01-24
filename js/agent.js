(function () {
    const url = new URL(window.location.href);
    // 使用 URLSearchParams 获取查询字符串参数
    const params = new URLSearchParams(url.search);
    if (params.has('agentId') || params.has('agentid')) {
        const agentId = params.get('agentId') ? params.get('agentId') : params.get('agentid')
        fetch(`https://agent.worker.xiangyueye.com/agent/add-relation?agentId=${agentId}`, 
          {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
        .then(response => response.json())
        .then(data => console.log(data))    // 处理返回的数据
    } else {
        console.log('没有agentId信息')
    }
})()