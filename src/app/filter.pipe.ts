import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(value: any, currentString: string, propName:string): any { 


    const resultArray = [];
    
      if(currentString === undefined){
        currentString = '';
      }

      if(value.length === 0 || currentString === ''){   

        value.filter(item =>{    
            item.author[propName] = item.author[propName].toLowerCase(); 
        }); 
        
        return value;

      }else{
        
         value.filter(item =>{  
          
          if(item && item.author &&  item.author[propName] === currentString){  
              resultArray.push(item); 
          } 

        });
      
      return resultArray;

      }

      

     
       
    }
   

}
