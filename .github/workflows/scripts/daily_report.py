import requests, time

TOKEN = "8741697447:AAHRX71ImqQTG8HoT82uz3vInK7ZtF_oomE"
CHAT_ID = "8275718926"
URL = f"https://api.telegram.org/bot{TOKEN}/sendMessage"

messages = [
"""📊 <b>INFORME TENDENCIAS IA — 21 ABRIL 2026</b>
<i>Nicho: Talleres de Inteligencia Artificial</i>

🔍 <b>FASE 1 — VIDEOS VIRALES</b>

<b>🎬 VIDEO 1 — Alibaba HappyHorse</b>
📈 +800k views | +15k likes
🎯 Modelo IA que apareció anónimo y desbancó a ByteDance en 48h. Alibaba +8% en bolsa.

<b>🎬 VIDEO 2 — Kling AI: foto → video</b>
📈 +1.2M views | +22k likes
🎯 Convierte 1 foto en video con movimiento en 10 segundos. Sin habilidad técnica.

<b>🎬 VIDEO 3 ⭐ MÁS REPLICABLE</b>
📈 +600k views | +11k likes
🎯 "5 prompts que te ahorran 10h esta semana" — lista + CTA implícita de guardar.""",

"""🧬 <b>FASE 2 — ADN VIRAL</b>

<b>VIDEO 1 — HappyHorse</b>
🎤 Hook: "Nadie sabía quién era" — misterio puro
⚡ Trigger: Miedo a quedarse atrás + Efecto WOW

<b>VIDEO 2 — Kling AI</b>
🎤 Hook: Visual directo foto aburrida → resultado increíble
⚡ Trigger: Efecto WOW + "Cualquiera puede"

<b>VIDEO 3 ⭐ — 5 Prompts</b>
🎤 Hook: "Para." — detiene el scroll
⚡ Trigger: Ahorro de tiempo extremo + FOMO
📌 Retención: Lista numerada + guardar integrado en el guion""",

"""🎬 <b>FASE 3 — GUION ESPEJO</b>
<b>"5 cosas que aprendes en mi taller de IA que no encuentras en YouTube"</b>
⏱ 30-45s | 📐 9:16 Vertical

[0-3s] 🎙 <i>"Para. Si trabajas con equipos, clientes o datos... necesitas ver esto."</i>
🎥 Texto en pantalla: <b>PARA.</b>

[4-8s] 🎙 <i>"Hay 5 cosas que enseño en mi taller de IA que no vas a aprender gratis."</i>
🎥 Overlay: <b>"No está en YouTube"</b>

[9-14s] 🎙 <i>"Número uno: cómo darle instrucciones a la IA para que suene como tú, no como un robot."</i>
🎥 Overlay: <b>#1 Tu voz, no la del robot</b>

[15-20s] 🎙 <i>"Número dos: el flujo de 3 pasos para automatizar reportes que te roban 2 horas."</i>
🎥 Overlay: <b>#2 Recupera 2h/semana</b>

[21-28s] 🎙 <i>"Número tres, cuatro y cinco... los doy en vivo en el taller."</i>
🎥 Overlay: <b>Solo en el taller 🔒</b>

[29-35s] 🎙 <i>"El link está en mi bio. Próxima fecha: [FECHA]. Cupos limitados."</i>
🎥 Texto animado: 👆 Link en bio | Cupos limitados""",

"""🎛 <b>NOTAS DE PRODUCCIÓN</b>

✅ Una sola toma (autenticidad)
✅ Frases cortas + pausas entre números
✅ Voz directa y práctica, sin exceso de energía
✅ Sin transiciones complejas
✅ Música: beat minimalista que baja en el CTA

⚡ Trigger central: Ahorro de tiempo + FOMO

━━━━━━━━━━━━━━━━━━━━━
🤖 Ariztia AI | 21 Abril 2026"""
]

for i, text in enumerate(messages, 1):
    r = requests.post(URL, json={"chat_id": CHAT_ID, "text": text, "parse_mode": "HTML"})
    print(f"Msg {i}/4: {'OK' if r.json().get('ok') else r.text}")
    time.sleep(1)
