const getAllTasks=(req,res)=>{
    res.send("Task List")
}
const getTask=(req,res)=>{
    res.send("Get task")
}

const createTask=(req,res)=>{
    res.send("create task")
}
const updateTask=(req,res)=>{
    res.send("Update task")
}

const deleteTask=(req,res)=>{
    res.send("delete task")
}

module.exports={
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}