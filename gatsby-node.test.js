const rewire = require("rewire")
const gatsby_node = rewire("./gatsby-node")
const cleanArray = gatsby_node.__get__("cleanArray")
// @ponicode
describe("cleanArray", () => {
    test("0", () => {
        let param1 = [[false, false, false], [true, true, false], [false, false, false]]
        let callFunction = () => {
            cleanArray(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[false, true, true], [false, true, true], [false, false, false]]
        let callFunction = () => {
            cleanArray(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [[false, false, false], [true, true, true], [true, true, true]]
        let callFunction = () => {
            cleanArray(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[true, false, false], [false, true, true], [true, true, true]]
        let callFunction = () => {
            cleanArray(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[false, false, true], [false, true, true], [true, false, true]]
        let callFunction = () => {
            cleanArray(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            cleanArray(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("gatsby_node.onCreateWebpackConfig", () => {
    test("0", () => {
        let object = [{ type: "ADD_TODO" }, { type: "RECEIVE_MESSAGE" }, "install", "remove", "discard", "discard", "assign", "REMOVE", "SHUTDOWN", "DELETE"]
        let callFunction = () => {
            gatsby_node.onCreateWebpackConfig({ actions: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            gatsby_node.onCreateWebpackConfig({ actions: "DELETE" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            gatsby_node.onCreateWebpackConfig({ actions: "discard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            gatsby_node.onCreateWebpackConfig({ actions: "install" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            gatsby_node.onCreateWebpackConfig({ actions: "assign" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            gatsby_node.onCreateWebpackConfig({ actions: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
