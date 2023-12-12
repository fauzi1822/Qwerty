let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, `*「 B̳̿͟͞a̳̿͟͞y̳̿͟͞a̳̿͟͞r̳̿͟͞ O̳̿͟͞w̳̿͟͞n̳̿͟͞e̳̿͟͞r̳̿͟͞ D̳̿͟͞u̳̿͟͞l̳̿͟͞u̳̿͟͞ S̳̿͟͞a̳̿͟͞t̳̿͟͞u̳̿͟͞ J̳̿͟͞u̳̿͟͞t̳̿͟͞a̳̿͟͞ 」*`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler