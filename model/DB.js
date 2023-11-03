import { Empleado } from "./Empleados.js";
import { Salario } from "./Salario.js";

export const empleados=[
    new Empleado("Juan","Perez","Desarrollador Senior","https://photoprint.com.co/wp-content/uploads/2020/05/visa-americana9_217x150.jpg","Juan@email.com"),
    new Empleado("Rodrigo","Hernandez","Desarrollador Senior","https://photoprint.com.co/wp-content/uploads/2020/05/pasaporte-alemana8_217x150.jpg","Rodrigo@email.com"),
    new Empleado("Matias","Rojas","Administrador","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEwvFP3FV1ou1fbGozZKWSXcj85YBnIL5m_sibjfkuZQm-cl5RzkmOz8EQELJYbEBFWo&usqp=CAU","Matias@email.com"),
    new Empleado("Daniela","Ruiz","Desarrollador Senior","https://img.freepik.com/fotos-premium/sonriente-joven-empresaria-empresaria-camisa-blanca-brazos-cruzados-pecho-como-profesional-pie-sobre-fondo-estudio_1258-87934.jpg?size=626&ext=jpg","Daniela@email.com"),
    new Empleado("Maria","Perez","Diseñador","https://media.istockphoto.com/id/1194830528/es/v%C3%ADdeo/retrato-de-mujer-africana-sonriente.jpg?s=640x640&k=20&c=-zQf6awJJ-yHRSBKJFnppHfkdTA2a50E642OSDTumW8=","Maria@email.com"),
    new Empleado("Juan","Perez","Desarrollador junior","https://photoprint.com.co/wp-content/uploads/2020/05/visa-americana9_217x150.jpg","Juan@email.com"),
    new Empleado("Rodrigo","Hernandez","Desarrollador Senior","https://photoprint.com.co/wp-content/uploads/2020/05/pasaporte-alemana8_217x150.jpg","Rodrigo@email.com"),
    new Empleado("Juan","Rojas","Administrador","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEwvFP3FV1ou1fbGozZKWSXcj85YBnIL5m_sibjfkuZQm-cl5RzkmOz8EQELJYbEBFWo&usqp=CAU","Matias@email.com"),
    new Empleado("Daniela","Ruiz","Desarrollador junior","https://img.freepik.com/fotos-premium/sonriente-joven-empresaria-empresaria-camisa-blanca-brazos-cruzados-pecho-como-profesional-pie-sobre-fondo-estudio_1258-87934.jpg?size=626&ext=jpg","Daniela@email.com"),
    new Empleado("Maria","Perez","Diseñador","https://media.istockphoto.com/id/1194830528/es/v%C3%ADdeo/retrato-de-mujer-africana-sonriente.jpg?s=640x640&k=20&c=-zQf6awJJ-yHRSBKJFnppHfkdTA2a50E642OSDTumW8=","Maria@email.com"),

];
const salarioUno=new Salario();
salarioUno.cantidad=2200000;
const salarioDos=new Salario();
salarioDos.cantidad=2600000;
const salarioTres=new Salario();
salarioTres.cantidad=2300000;

empleados[0].añadirSalario(salarioUno)
empleados[0].añadirSalario(salarioDos)
empleados[0].añadirSalario(salarioTres)
empleados[1].añadirSalario(salarioDos)
empleados[1].añadirSalario(salarioUno)
empleados[3].añadirSalario(salarioDos)
empleados[4].añadirSalario(salarioTres)
empleados[3].añadirSalario(salarioDos)
empleados[2].añadirSalario(salarioDos)
empleados[2].añadirSalario(salarioTres)
empleados[2].añadirSalario(salarioDos)