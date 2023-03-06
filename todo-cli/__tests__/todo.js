/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-spacing */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable brace-style */

// const today = new Date();
// const formattedDate = d => {
//   return d.toLocaleDateString("en-CA")
// }

// var dateToday = new Date().toLocaleDateString("en-CA")
// dateToday
// .toLocaleDateString("en-CA")
// .toLocaleDateString("en-CA")
// let Today = today.setDate(today.getDate())

// const Today = new Date().toLocaleDateString("en-CA")
// const tomorrow = new Date(dateToday.getTime() + 86400000).toLocaleDateString("en-CA")
// const yesterday = new Date(dateToday.getTime() - 86400000).toLocaleDateString("en-CA")
const todoList = require('../todo')


const { all, add, markAsComplete , overdue, dueLater, dueToday } = todoList()

describe("Todolist Test Suite", () => {
    beforeAll(() => {
        var dateToday = new Date()

        add({ title: 'File taxes', dueDate: new Date().toLocaleDateString("en-CA"), completed: false })
        add({ title: 'Pay rent', dueDate: new Date(dateToday.getTime() - 86400000).toLocaleDateString("en-CA"), completed: false })
        add({ title: 'Service Vehicle', dueDate: new Date(dateToday.getTime() + 86400000).toLocaleDateString("en-CA"), completed: false })
    add({ title: 'Pay electric bill', dueDate: new Date(dateToday.getTime() + 86400000).toLocaleDateString("en-CA"), completed: false })
    add({ title: 'Submit assignment', dueDate: new Date(dateToday.getTime() + 86400000).toLocaleDateString("en-CA"), completed: false })
})

    test("Adding New test", () => {
        const itemscount = all.length
        add( 
            {
                title: "Test", completed: false, dueDate: new Date().toLocaleDateString("en-CA")
            }
        )
        expect(all.length).toBe(itemscount + 1)
    })
    test("Mark as complete", () => {
        expect(all[0].completed).toBe(false)
        markAsComplete(0);
        expect(all[0].completed).toBe(true)
    })
    test("Overdue wala", () => {
        expect(overdue().length).toBe(1)
    })
    test("Due Later", () => {
        expect(dueLater().length).toBe(3)
    })
    test("Due Today", () => {
        expect(dueToday().length).toBe(2)
    })
})