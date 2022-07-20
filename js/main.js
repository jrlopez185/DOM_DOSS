let users = [
    /*ID_de_usuario*/ /*nombre_usuario*/  /*contraseña*/  /*nombre_completo*/             /*dirección*/                   /*correo_electronico*/           /*telefono*/
      [100,           'anna0',            'white00',      'Anna Addison',     '1325 Candy Rd, San Francisco, CA 96123',   'anna.addison@yahoo.com',       '3841019535'],
      [101,           'carol1',           'orange01',     'Carol Campbell',   '1931 Brown St, Gainesville, FL 85321',     'carol.campbell@aol.com',       '2548952651'],
      [102,           'julia2',           'yellow02',     'Julia Jones',      '1622 Seaside St, Seattle, WA 32569',       'jolie.jones@msn.com',          '3651469235'],
      [103,           'irene3',           'blue03',       'Irene Everly',     '1756 East Dr, Houston, TX 28562',          'irene.everly@gmail.com',       '9859423698'],
      [104,           'rachel4',          'red04',        'Rachel Rose',      '1465 River Dr, Boston, MA 43625',          'rachel.rose@hotmail.com',      '2945632543'],
      [105,           'sophie5',          'green05',      'Sophie Sutton',    '1896 West Dr, Portland, OR 65842',         'sophie.sutton@yahoo.com',      '5169525614'],
      [106,           'wendy6',           'purple06',     'Wendy West',       '1252 Vine St, Chicago, IL 73215',          'wendy.west@gmail.com',         '6645936156'],
  
  ];
    
    
    let posicion = 0;
    let title = document.querySelector('#cj-titulo_texto');
    let derecha = document.getElementById('derecha')
    let izquierda = document.getElementById('izquierda')
    title.innerHTML = users[posicion][1];
    
    function siguiente(){
      if(posicion <= 6){
        posicion++;
      }
      title.innerHTML = users[posicion][1];
    };
    
    function anterior(){
        if(posicion >= 1){
          posicion--;
        }
    
        title.innerHTML = users[posicion][1];
    
    };
    derecha.addEventListener('click', siguiente)
    izquierda.addEventListener('click', anterior)
    
  
  
    import { user_ob } from "./data.js";
  
    let bt_ver = document.getElementById('bt_ver')
  
  
  function verInfo(){
      
       root.innerHTML = '<ul style="font-size: 3rem;display: flex;flex-direction: column;justify-content: center; list-style: none;">' + 
                           '<li>'+'id: '      + user_ob[posicion].id + '</li>' + 
                           '<li>'+'nickname: '+ user_ob[posicion].nickname + '</li>' + 
                           '<li>'+'name: '    + user_ob[posicion].name + '</li>' + 
                           '<li>'+'addres: '  + user_ob[posicion].addres + '</li>' + 
                           '<li>'+'email: '   + user_ob[posicion].email + '</li>' + 
                           '<li>'+'phone: '   + user_ob[posicion].phone + '</li>' + 
                       '</ul>';
   }
   bt_ver.addEventListener('click', verInfo)