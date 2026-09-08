var DEMO_DATA = [
  {
    "family": "Text-to-Speech",
    "tasks": [
      {
        "task": "Zero-Shot TTS",
        "examples": [
          {
            "instruction": "Speak in this speaker's voice: \"If not even light can escape the event horizon, how do you think you'll escape me?\"",
            "caption": "",
            "captionLabel": "",
            "input": "audio/q01_in.wav",
            "student": "audio/q01_a.wav",
            "teacher": "audio/q01_b.wav"
          },
          {
            "instruction": "Speak in this speaker's voice: \"有些事情只有失去了才知道珍惜，有些人转身以后，就再也回不来了\"",
            "caption": "",
            "captionLabel": "",
            "input": "audio/q05_in.wav",
            "student": "audio/q05_a.wav",
            "teacher": "audio/q05_b.wav"
          }
        ]
      },
      {
        "task": "Instruct TTS",
        "examples": [
          {
            "instruction": "Speak with the voice described below: \"一位雄才大略、性格复杂的乱世枭雄，以略显沙哑却极有穿透力的中年男声说话。语气自信、果断，带着审视人心的敏锐感。讲话时节奏变化明显，可以先压低声音缓缓铺垫，再突然加重关键字。既有豪迈，也隐约带着危险与猜疑\" and say: \"宁可我负天下人，休教天下人负我。\"",
            "caption": "",
            "captionLabel": "",
            "input": null,
            "student": "audio/q03_b.wav",
            "teacher": "audio/q03_a.wav"
          },
          {
            "instruction": "Speak with the voice described below: \"仿佛在葬礼上宣布噩耗一般，声音轻柔而哽咽，强忍着泪水，话语断断续续、每句之间都有停顿，字字愈发沉重，最后一句的尾音被悲伤撕裂、颤抖着透出压抑不住的哭腔。语调缓慢低沉，气息不稳，清晰度因哽咽而略受影响，整体氛围凝重而哀恸\" and say: \"He always said he'd come back. He always kept his word. Until now.\"",
            "caption": "",
            "captionLabel": "",
            "input": null,
            "student": "audio/q06_b.wav",
            "teacher": "audio/q06_a.wav"
          }
        ]
      }
    ]
  },
  {
    "family": "Content Editing",
    "tasks": [
      {
        "task": "Speech Content Editing",
        "examples": [
          {
            "instruction": "Add \"never\" before \"out\"",
            "caption": "Mamba <mark class=\"tr-add\">never</mark> out.",
            "captionLabel": "➕ Add · 文本 / Transcript",
            "input": "audio/q02_in.wav",
            "student": "audio/q02_a.wav",
            "teacher": "audio/q02_b.wav"
          },
          {
            "instruction": "Insert \"在下辗转反侧，梦寐以求\" after \"不得相见\"",
            "caption": "愚夫，久闻先生大名如雷贯耳，曾两次进谒不得相见<mark class=\"tr-add\">在下辗转反侧，梦寐以求</mark>，已留书一封，不知可曾阅过？",
            "captionLabel": "➕ Add · 文本 / Transcript",
            "input": "audio/q07_in.wav",
            "student": "audio/q07_b.wav",
            "teacher": "audio/q07_a.wav"
          }
        ]
      },
      {
        "task": "Vocal Edit",
        "examples": [
          {
            "instruction": "Replace \"寂寞\" with \"孤独\" in the lyrics",
            "caption": "这是今天最<mark class=\"tr-chg\"><s>寂寞</s> → 孤独</mark>的时候，太阳照着你好温柔",
            "captionLabel": "🔁 Replace · 歌词 / Lyrics",
            "input": "audio/q09_in.wav",
            "student": "audio/q09_a.wav",
            "teacher": "audio/q09_b.wav"
          }
        ]
      }
    ]
  },
  {
    "family": "Paralinguistic Editing",
    "tasks": [
      {
        "task": "Timbre Edit",
        "examples": [
          {
            "instruction": "Keep the original content and change the timbre to: \"这位说话人的声音低沉而浑厚，语速平稳，吐字清晰。他的说话风格沉稳而富有思考，带有平静的反思特质。\"",
            "caption": "",
            "captionLabel": "",
            "input": "audio/q04_in.wav",
            "student": "audio/q04_a.wav",
            "teacher": "audio/q04_b.wav"
          }
        ]
      },
      {
        "task": "Emotion Edit",
        "examples": [
          {
            "instruction": "Say this line in a sad tone",
            "caption": "",
            "captionLabel": "",
            "input": "audio/q13_in.wav",
            "student": "audio/q13_b.wav",
            "teacher": "audio/q13_a.wav"
          }
        ]
      },
      {
        "task": "Nonverbal Edit",
        "examples": [
          {
            "instruction": "Add a laugh at the end",
            "caption": "你知道怎么叫取悦自己吗？让自己开心，就玩游戏一定要笑<mark class=\"tr-add\">😂</mark>",
            "captionLabel": "😂 laugh · 文本 / Transcript",
            "input": "audio/q14_in.wav",
            "student": "audio/q14_b.wav",
            "teacher": "audio/q14_a.wav"
          }
        ]
      },
      {
        "task": "Whisper Edit",
        "examples": [
          {
            "instruction": "Convert to a whisper",
            "caption": "",
            "captionLabel": "",
            "input": "audio/q15_in.wav",
            "student": "audio/q15_b.wav",
            "teacher": "audio/q15_a.wav"
          }
        ]
      }
    ]
  },
  {
    "family": "Acoustic Editing",
    "tasks": [
      {
        "task": "Speed Edit",
        "examples": [
          {
            "instruction": "Slow the speech down to half speed",
            "caption": "",
            "captionLabel": "",
            "input": "audio/q10_in.wav",
            "student": "audio/q10_a.wav",
            "teacher": "audio/q10_b.wav"
          }
        ]
      },
      {
        "task": "Deaccent",
        "examples": [
          {
            "instruction": "Remove the accent from this speech while preserving its meaning and tone",
            "caption": "",
            "captionLabel": "",
            "input": "audio/q16_in.wav",
            "student": "audio/q16_a.wav",
            "teacher": "audio/q16_b.wav"
          }
        ]
      }
    ]
  },
  {
    "family": "Enhancement and Separation",
    "tasks": [
      {
        "task": "Enhance Speech",
        "examples": [
          {
            "instruction": "Remove the noise from this speech",
            "caption": "",
            "captionLabel": "",
            "input": "audio/q12_in.wav",
            "student": "audio/q12_b.wav",
            "teacher": "audio/q12_a.wav"
          }
        ]
      },
      {
        "task": "Separate Speech",
        "examples": [
          {
            "instruction": "Extract the first speaker",
            "caption": "",
            "captionLabel": "",
            "input": "audio/q08_in.wav",
            "student": "audio/q08_a.wav",
            "teacher": "audio/q08_b.wav"
          }
        ]
      },
      {
        "task": "Extract Vocals",
        "examples": [
          {
            "instruction": "Keep only the vocals of this song",
            "caption": "",
            "captionLabel": "",
            "input": "audio/q11_in.wav",
            "student": "audio/q11_a.wav",
            "teacher": "audio/q11_b.wav"
          }
        ]
      }
    ]
  }
];
