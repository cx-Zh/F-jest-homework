const verifyPassword = jest.fn().mockImplementation(() => true);
const verifyUsername = jest.fn();

export { verifyPassword, verifyUsername };
