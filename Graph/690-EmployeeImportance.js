/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     // It's the unique id of each node
 *     // unique id of this employee
 *     this.id = id;
 *     // the importance value of this employee
 *     this.importance = importance;
 *     // the id of direct subordinates
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const id_map = new Map()
    employees.forEach((emp) => {
      id_map.set(emp.id, emp)
    })
    let dfsHelper  = (emp) => {
     let ans = emp.importance
     for (let i = 0; i < emp.subordinates.length; i++) {
       ans += dfsHelper(id_map.get(emp.subordinates[i]))
     }
      return ans
    }
    return dfsHelper(id_map.get(id))
};


