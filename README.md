# Cotizador de Criptomonedas en tiempo real
## Emmanuel Cruz Hernández

----

### Descripción

Cotizador de criptomonedas en tiempo real, implementado con React. Se incorpora la creación de Hooks propios y la aplicación de style components. También se aplica llamada de API en este proyecto.

----

### Sobre Hooks personalizados

Con Hooks propios se puede reutilizar una función que se puede incorporar al _State_ y mantener el valor de la función de forma persistente. De esta forma, se pueden integrar a las ventajas de React como State, Effect e integración con el performance.

#### Creación de Hooks

Por convención, los Hooks se crean con una leta minúscula al comienzo y se aplica CamelCase. Los Hooks tienen la misma sintaxis que un componente, a diferencia que este regresa un arreglo o un objeto.

        const myHook = () => {

            const myHook = () => {
                console.log('Función desde Hook')
            }

            return [ myHook ]
        }

        export default myHook

#### Importación de Hooks

Este Hook se puede utilizar en otras partes del proyecto con la sintaxis siguiente

        const [ SelectMonedas ] = useSelectMonedas()
        SelectMonedas()

#### Hooks con parámetros

Es posible pasarle parámetros a los Hooks. La forma en que se reciben en el Hook usa la siguiente sintaxis

        const useSelectMonedas = (label) => {
            ...
        }

Y desde el componente en el que se usan se pasa el parámetro en la posición que le corresponde. Cada parámetro se separa por una coma.

        const [ SelectMonedas ] = useSelectMonedas('Selecciona una moneda')

Este ejemplo se puede consultar directamente en este proyecto.