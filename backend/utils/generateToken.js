import jwt from 'jsonwebtoken'

const generateToken = (id) => {
	return jwt.sign({ id },'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4NDQ3NTQ5MCwiaWF0IjoxNjg0NDc1NDkwfQ.1sey9nnpIMwYSNNZqv5TM_lurqpT8JTG7B9qxm7J3X8', { expiresIn: '30d' })
}

export default generateToken
