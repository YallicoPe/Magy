const handler = async (m, {conn}) => {
  m.reply(global.InfoBot);
};
handler.command = /^(InfoBot)$/i;
export default handler;
global.InfoBot = `
𝚈𝚊𝚕𝚕𝚒𝚌𝚘 𝙱𝚘𝚝 🇦🇱

*Está Es Toda La Información Respecto A Mi Creador  🇦🇱*

> Dragon Bot Es Un Proyecto Creado Con La Única Finalidad De Mejorar La Atención Al Usuario Ya Que Sostiene Grandes Comandos Y Gracias A Que Se Mantiene Activo Las 24Hs Del Día Brinda Una Mayor Ayuda A Los Usuarios De Este Mismo.

> Deseas Contactar Con Mi Creador? Escriba El Comando .owner  Para Contactarlo.
`;