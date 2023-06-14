using Microsoft.AspNetCore.Mvc;
using NetCorePET.Models;
using System.Reflection.Metadata.Ecma335;

namespace NetCorePET.Controllers
{
    [ApiController]
    [Route("cliente")]
    public class ClienteControler : ControllerBase
    {
        [HttpGet]
        [Route("Listar")]
        public IActionResult listarCliente()
        {
            string token = Request.Headers.Where(x => x.Key == "Authorization").FirstOrDefault().Value;

            List<Cliente> clientes = new List<Cliente>
            {
                new Cliente
                {
                    id = "1",
                    correo = "prueba@itlm.com.ar",
                    edad = "29",
                    nombre = "Juan Perez"
                },
                new Cliente
                {
                    id = "2",
                    correo = "prueba2@itlm.com.ar",
                    edad = "13",
                    nombre = "Carlos Gomez"
                },
                new Cliente
                {
                    id = "5",
                    correo = "josesito@itlm.com.ar",
                    edad = "993",
                    nombre = "Jose Juan Carlos Perez Gomez"
                },
                new Cliente
                {
                    id = "3",
                    correo = "prus@itlm.com.ar",
                    edad = "9943",
                    nombre = "Messi"
                },
            };
            if (token != "marco123.")
            {
                return BadRequest(new

                {
                    success = false,
                    message = "token incorrecto",
                    result = ""
                });
            }

            return Ok(clientes);
        }

        [HttpGet]
        [Route("listarporid")]
        public IActionResult listarClienteporid(int codigo)
        {

            string token = Request.Headers.Where(x => x.Key == "Authorization").FirstOrDefault().Value;

            if (token != "marco123.")
            {
                return BadRequest(new

                {
                    success = false,
                    message = "token incorrecto",
                    result = ""
                });
            }

            return Ok(new Cliente
            {
                id = codigo.ToString(),
                correo = "google@itlm.com.ar",
                edad = "23",
                nombre = "Prueba 212"
            });

        }

        [HttpPost]
        [Route("guardar")]
        public IActionResult guardarCliente(Cliente cliente)
        {
            cliente.id = "3";

            string token = Request.Headers.Where(x => x.Key == "Authorization").FirstOrDefault().Value;

            if (token != "marco123.")
            {
                return BadRequest(new

                {
                    success = false,
                    message = "token incorrecto",
                    result = ""
                });
            }

            return Ok(new
            {
                success = true,
                message = "cliente registrado",
                result = cliente
            });
        }

        [HttpPost]
        [Route("eliminar")]
        public IActionResult eliminarCliente(Cliente cliente)
        {

            string token = Request.Headers.Where(x => x.Key == "Authorization").FirstOrDefault().Value;

            if (token != "marco123.")
            {
                return BadRequest(new
             
                {
                    success = false,
                    message = "token incorrecto",
                    result = ""
                });
            }

            return Ok(new
            {
                success = true,
                message = "cliente eliminado",
                result = cliente
            });
        }
    }
}
