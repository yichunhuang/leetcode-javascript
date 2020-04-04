/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    let topo = (courseID) => {
      if (courseIsPassed[courseID] == 1) 
        return true

      if (courseIsPassed[courseID] == -1)
        return false

      courseIsPassed[courseID] = -1

      const pre = coursePrerequisites[courseID]

      for (let i = 0; i < pre.length; i++) {
        if (!topo(pre[i])) {
          return false
        }
      }
      courseIsPassed[courseID] = 1
      return true
    }
    
    const coursePrerequisites = {}, courseIsPassed = {}
    for (let i = 0; i < numCourses; i++) {
      coursePrerequisites[i] = []
      courseIsPassed[i] = 0
    }
    for (let i = 0; i < prerequisites.length; i++) {
      coursePrerequisites[prerequisites[i][1]].push(prerequisites[i][0])
    }

    for (let i = 0; i < numCourses; i++) {
      if (!topo(i)) 
        return false
    }
    return true
};
