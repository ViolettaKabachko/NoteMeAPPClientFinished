export const storeTokens = (access, refresh) => {
    localStorage.setItem("access_token", access)
    localStorage.setItem("refresh_token", refresh)
    
}

export const redirect = (path) => {
    window.location.href = path
  }

export const getDataByToken = async (route) => {
    const opts = {
        credentials: "include",
        headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
    }
    const res = await fetch(route, opts)
    if (res.status !== 200) {
        refreshToken()
    }
    let data = await res.json()
    return {data: data, status: res.status}
}

export const sendData = async (url, data, type) => {
    const opts = {
        credentials: "include",
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(data)
    }       
    const response = await fetch(url, opts)
    let res = await response.json()
    if (type === 'login' && response.status === 200)
        storeTokens(res.access_token, res.refresh_token)
    else {
        if (response.status !== 200) {
            refreshToken()
        }
    }
    return {data: res, status: response.status}
}

export const updateAvatar = async (url, data) => {
    const opts = {
        credentials: 'include',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, UPDATE, DELETE"
        },
        body: data
    }
    const response = await fetch(url, opts)
    let res = await response.json()
    if (response.status !== 200) {
        refreshToken()
    }
    return {data: res, status: response.status}
}

export const refreshToken = async () => {
    const opts = {
        credentials: "include",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('refresh_token')}`
        }
    }
    let res = await fetch('http://127.0.0.1:5000/refresh', opts)
    if (res.status === 200) {
        let res_json = await res.json()
        storeTokens(res_json.access_token, res_json.refresh_token)
    }
    else {
        localStorage.clear()
        redirect('/login')
    }
}