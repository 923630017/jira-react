// 不符合rest接口的
module.exports = (req, res, next) => {
  if(req.method === 'POST' && req.path === '/login') {
    if(req.body.username === 'hqb' && req.body.password === '123456') {
      return res.status(200).json({
         name: 'hqb',
         token: '123',
         password: '123456'   
      })
    } else {
      return res.status(400).json({
        message: '用户名或密码错误！'
      })
    }
  } 
  next()
}