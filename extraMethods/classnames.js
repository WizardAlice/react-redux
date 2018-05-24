'use strict'

export default function(...names){
  let classnames = ""
  names.map((argument) => {
    if(argument.constructor === Object){
      for(let i in argument){
        if(argument.hasOwnProperty(i) && argument[i] === true){
          classnames += `${i} `
        }
      }
    }else{
      classnames += `${argument} `
    }
  })
  return classnames
}