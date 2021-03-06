exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C1%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3A%22o/master%22%7D%2C%22o/master%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22o/master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22side%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22side%22%2C%22remoteTrackingBranchID%22%3A%22o/master%22%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22side%22%2C%22id%22%3A%22HEAD%22%7D%2C%22originTree%22%3A%7B%22branches%22%3A%7B%22master%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22master%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22master%22%2C%22id%22%3A%22HEAD%22%7D%7D%7D",
  "solutionCommand": "git checkout -b side o/master;git commit;git pull --rebase;git push",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "name": {
    "en_US": "Remote Tracking",
    "zh_CN": "Remote Tracking",
    "zh_TW": "remote tracking",
    "es_AR": "Trackeando remotos",
    "pt_BR": "Seguindo remotos",
    "de_DE": "Remote Tracking",
    "ja"   : "リモートのトラッキング",
    "fr_FR": "Suivi de branche distante",
    "ru_RU": "Слежка за удалённым репозиторием",
    "ko"   : "원격 저장소 추적하기"
  },
  "hint": {
    "en_US": "Remember there are two ways to set remote tracking!",
    "zh_CN": "记住，有两种设置 remote tracking 的方法!",
    "zh_TW": "記住喔，有兩個方式可以去設定 remote tracking",
    "es_AR": "¡Acordate de que hay dos formas de trackear un remoto!",
    "pt_BR": "Lembre-se que há duas formas de seguir um ramo remoto!",
    "de_DE": "Nicht vergessen, es gibt zwei Arten Remote Tracking einzurichten!",
    "ja"   : "リモートトラッキングを設定する方法が二つあるのをお忘れなく!",
    "fr_FR": "Rappelez-vous qu'il existe deux façons de configurer le suivi de branche distante !",
    "ru_RU": "Помни, есть два способа установить слежку за удалённым репозиторием!",
    "ko"   : "원격 추적하기를 설정하는데에는 두가지 방법이 있습니다!"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Remote-Tracking branches",
              "",
              "One thing that might have seemed \"magical\" about the last few lessons is that git knew the `master` branch was related to `o/master`. Sure these branches have similar names and it might make logical sense to connect the `master` branch on the remote to the local `master` branch, but this connection is demonstrated clearly in two scenarios:",
              "",
              "* During a pull operation, commits are downloaded onto `o/master` and then *merged* into the `master` branch. The implied target of the merge is determined from this connection.",
              "* During a push operation, work from the `master` branch was pushed onto the remote's `master` branch (which was then represented by `o/master` locally). The *destination* of the push is determined from the connection between `master` and `o/master`.",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Remote tracking",
              "",
              "Long story short, this connection between `master` and `o/master` is explained simply by the \"remote tracking\" property of branches. The `master` branch is set to track `o/master` -- this means there is an implied merge target and implied push destination for the `master` branch.",
              "",
              "You may be wondering how this property got set on the `master` branch when you didn't run any commands to specify it. Well, when you clone a repository with git, this property is actually set for you automatically. ",
              "",
              "During a clone, git creates a remote branch for every branch on the remote (aka branches like `o/master`). It then creates a local branch that tracks the currently active branch on the remote, which is `master` in most cases.",
              "",
              "Once git clone is complete, you only have one local branch (so you aren't overwhelmed) but you can see all the different branches on the remote (if you happen to be very curious). It's the best of both worlds!",
              "",
              "This also explains why you may see the following command output when cloning:",
              "",
              "    local branch \"master\" set to track remote branch \"o/master\""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Can I specify this myself?",
              "",
              "Yes you can! You can make any arbitrary branch track `o/master`, and if you do so, that branch will have the same implied push destination and merge target as `master`. This means you can run `git push` on a branch named `totallyNotMaster` and have your work pushed to the `master` branch on the remote!",
              "",
              "There are two ways to set this property. The first is to checkout a new branch by using a remote branch as the specified ref. Running",
              "",
              "`git checkout -b totallyNotMaster o/master`",
              "",
              "Creates a new branch named `totallyNotMaster` and sets it to track `o/master`."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Enough talking, let's see a demonstration! We will checkout a new branch named `foo` and set it to track `master` on the remote."
            ],
            "afterMarkdowns": [
              "As you can see, we used the implied merge target of `o/master` to update the `foo` branch. Note how master doesn't get updated!!"
            ],
            "command": "git checkout -b foo o/master; git pull",
            "beforeCommand": "git clone; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "This also applies for git push"
            ],
            "afterMarkdowns": [
              "Boom. We pushed our work to the `master` on the remote even though our branch was named something totally different"
            ],
            "command": "git checkout -b foo o/master; git commit; git push",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Way #2",
              "",
              "Another way to set remote tracking on a branch is to simply use the `git branch -u` option. Running",
              "",
              "`git branch -u o/master foo`",
              "",
              "will set the `foo` branch to track `o/master`. If `foo` is currently checked out you can even leave it off:",
              "",
              "`git branch -u o/master`",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's see this other way of specifying remote tracking real quick..."
            ],
            "afterMarkdowns": [
              "Same as before, just a more explicit command. Sweet!"
            ],
            "command": "git branch -u o/master foo; git commit; git push",
            "beforeCommand": "git clone; git checkout -b foo"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok! For this level let's push work onto the `master` branch on remote while *not* checked out on `master` locally. I'll let you figure out the rest since this is the advanced course :P"
            ]
          }
        }
      ]
    },
    "fr_FR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Le suivi des branches distantes",
              "",
              "Dans les dernières leçons, git savait que la branche `master` était reliée à `o/master`, et cela a pu vous paraître \"magique\". Il est certain que ces deux branches ont des noms similaires et il peut être logique de croire que la branche locale `master` est liée à la branche distante `master`, mais la relation n'est prouvée que dans deux scénarios :",
              "",
              "* Pendant un pull, les commits sont téléchargés dans `o/master` et ensuite *fusionnés* (merge) dans la branche `master`. La cible impliquée dans cette fusion est déterminée par cette relation.",
              "* Pendant un push, le travail de la branche `master` a été envoyé sur la branche distante `master` (qui est localement représentée par `o/master`). La *destination* du push est déterminée par la relation entre `master` and `o/master`.",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Remote tracking",
              "",
              "Pour faire court, cette relation entre `master` et `o/master` est simplement portée par la propriété \"remote tracking\" (suivi distant) des branches. La branche `master` est configurée pour suivre `o/master` : cela signifie qu'il y a une cible de fusion et une destination d'envoi implicites pour la branche `master`.",
              "",
              "Vous vous demandez peut-être comment cette propriété a été configurée pour la branche `master` alors que vous n'avez exécuté aucune commande pour le faire. Eh bien, quand vous clonez un dépôt avec git, cette propriété est configurée automatiquement. ",
              "",
              "Pendant le clonage, git crée une branche distante pour chaque branche du dépôt distant (c'est à dire des branches comme `o/master`). Il crée ensuite une branche locale qui suit la branche actuellement active sur le dépôt distant, qui se trouve être `master` dans la plupart des cas.",
              "",
              "Une fois que git clone est terminé, vous avez seulement une branche locale (comme ça vous n'êtes pas submergé) mais vous pouvez voir toutes les branches distantes (si vous êtes très curieux). C'est le compromis idéal !",
              "",
              "Cela explique aussi pourquoi vous avez peut-être vu la sortie suivante pendant le clonage :",
              "",
              "    local branch \"master\" set to track remote branch \"o/master\""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Puis-je configurer cette relation moi-même ?",
              "",
              "Absolument ! Vous pouvez suivre `o/master` depuis n'importe quelle branche, et si vous le faîtes, cette branche va avoir la même destination de push et cible de merge que pour `master`. Cela signifie que vous pouvez exécuter `git push` sur une branche nommée `totallyNotMaster` mais envoyer tout de même votre travail sur la branche `master` du dépôt distant !",
              "",
              "Il y a deux façons de configurer cette propriété. La première est de créer une nouvelle branche en la branchant immédiatement sur la branche distante, à l'aide de `git checkout -b` :",
              "",
              "`git checkout -b totallyNotMaster o/master`",
              "",
              "Cette commande crée une nouvelle branche nommée `totallyNotMaster` et la configure pour suivre `o/master`."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Assez parlé, faisons une démonstration ! Nous allons nous placer sur une nouvelle branche nommée `foo` et la configurer pour suivre `master` du dépôt distant."
            ],
            "afterMarkdowns": [
              "Comme vous pouvez le voir, nous avons utilisé la cible de fusion déclarée pour `o/master` afin de mettre à jour la branche `foo`. Remarquez que la branche master n'a pas été mise à jour !!"
            ],
            "command": "git checkout -b foo o/master; git pull",
            "beforeCommand": "git clone; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Cela s'applique aussi pour git push :"
            ],
            "afterMarkdowns": [
              "Boum. Nous avons envoyé notre travail sur `master` vers le dépôt distant alors que notre branche avait un nom totalement différent."
            ],
            "command": "git checkout -b foo o/master; git commit; git push",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Méthode n°2",
              "",
              "Une autre façon de configurer le suivi d'une branche est d'utiliser l'option `git branch -u`. La commande est alors :",
              "",
              "`git branch -u o/master foo`",
              "",
              "Ce qui va configurer la branche `foo` (déjà existante) pour suivre `o/master`. Si `foo` est la branche courante, vous pouvez même ne pas la préciser :",
              "",
              "`git branch -u o/master`",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Voyons cette autre manière de paramètrer le suivi d'une branche distante..."
            ],
            "afterMarkdowns": [
              "C'est la même chose, et c'est juste un peu plus explicite. Cool !"
            ],
            "command": "git branch -u o/master foo; git commit; git push",
            "beforeCommand": "git clone; git checkout -b foo"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok ! Pour ce niveau, envoyons notre travail sur la branche distante `master` en ne se trouvant *pas* sur la branche `master` locale. Je vous laisse chercher comment faire, puisque c'est une leçon de niveau avancé :P"
            ]
          }
        }
      ]
    },
    "es_AR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Ramas que trackean remotos",
              "",
              "Una de las cosas que pueden haber parecido \"mágicas\" de las últimas lecciones es que git sabía que la rama `master` estaba relacionada con `o/master`. Obviamente, estas ramas tienen nombres parecidos, y podría parecer lógico conectar la rama `master` del remoto con la rama `master` local, pero esta conexión es bien evidente en dos escenarios:",
              "",
              "* Durante una operación de pull, los commits se descargan a `o/master` y después se *mergean* a la rama `master`. El objetivo implícito del merge se determina con esta conexión.",
              "* Durante un push, el trabajo de la rama `master` se sube a la rama `master` del remoto (que estaba representada localmente por `o/master`). El *destino* del push se determina con esta conexión entre `master` y `o/master`.",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Trackeando remotos",
              "",
              "Haciéndola corta, esta conexión entre `master` y `o/master` se explica simplemente por la propiedad de \"trackear (seguir) remotos\" de las ramas. La rama `master` está configurada para trackear `o/master` -- osea, que hay un objetivo implícito para el merge y un destino implícito para de la rama `master`.",
              "",
              "Podrías estar pensando cómo esa propiedad apareció en tu rama `master` si vos no corriste ningún comando para especificarlo. Bueno, cuando clonás un repositorio con git, esta propiedad se asigna por vos automáticamente.",
              "",
              "Durante un clone, git crea una rama remota por cada rama en el remoto (por ejemplo, ramas como `o/master`). Pero después crea una rama local que trackea la rama activa del remote, que suele ser `master`.",
              "",
              "Una vez completado el git clone, sólo tenés una única rama local (para que no te asustes) pero podés ver todas las ramas que del remoto (si fueras tan curioso). ¡Es lo mejor de ambos mundos!",
              "",
              "Esto también explica por qué podrías ver un mensaje como este durante la clonación:",
              "",
              "    local branch \"master\" set to track remote branch \"o/master\"",
              "",
              "    rama local \"master\" establecida para trackear la rama remota \"o/master\""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### ¿Puedo especificarlo yo?",
              "",
              "¡Claro que sí! Podés hacer que cualquier rama que quieras trackee `o/master`, y si lo hicieras, esa rama va a tener el mismo destino implícito de push y objetivo implícito de merge que `master`. Eso signfica que podés correr `git push` en una rama llamada `absolutamenteNoEsMaster` y ¡que tu trabajo se pushee a la rama `master` del remoto!",
              "",
              "Hay dos formas de establecer esta propiedad. La primera es checkoutear una nueva rama usando una rama remota como la referencia especificada. Ejecutar",
              "",
              "`git checkout -b absolutamenteNoEsMaster o/master`",
              "",
              "Crea una nueva rama llamada `absolutamenteNoEsMaster` y la hace trackear a `o/master`."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Suficiente charla, ¡veamos una demo! Vamos a checkoutear una nueva rama llamada `foo` y hacer que trackee a `master` en el remoto."
            ],
            "afterMarkdowns": [
              "Como podés ver, usamos el objetivo implícito de merge `o/master` para actualizar la rama `foo`. ¡Notá cómo `master` no fue actualizada!"
            ],
            "command": "git checkout -b foo o/master; git pull",
            "beforeCommand": "git clone; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Lo mismo aplica para git push"
            ],
            "afterMarkdowns": [
              "Boom. Pusheamos nuestro trabajo a la rama `master` del remoto incluso cuando nuestra rama se llamaba totalmente distinto"
            ],
            "command": "git checkout -b foo o/master; git commit; git push",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Forma número 2",
              "",
              "Otra forma de especificar la rama a trackear es usar la opción `git branch -u`. Ejecutando",
              "",
              "`git branch -u o/master foo`",
              "",
              "establecemos que la rama `foo` trackee a `o/master`. Si encima estás parado en `foo`, incluso podés obviarlo:",
              "",
              "`git branch -u o/master`",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Veamos rápidamente esta otra forma de especificar la rama a trackear..."
            ],
            "afterMarkdowns": [
              "Lo mismo que antes, sólo que con un comando bastante más explícito. ¡Una belleza!"
            ],
            "command": "git branch -u o/master foo; git commit; git push",
            "beforeCommand": "git clone; git checkout -b foo"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¡Ok! Para este nivel, pusheá tu trabajo a la rama `master` del remoto *sin* estar parado sobre `master` localmente. Te dejo que te des cuenta del resto solo, que para algo este es el curso avanzado :P"
            ]
          }
        }
      ]
    },
    "pt_BR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Seguindo ramos remotos",
              "",
              "Uma coisa que pode ter parecido \"mágica\" nas lições passadas é que o Git sabia que o ramo `master` estava relacionado com o `o/master`. Certamente esses ramos possuem nomes similares, e tem todo sentido lógico conectar o ramo `master` do lado remoto com o ramo `master` local, mas essa conexão é demonstrada claramente em dois cenários:",
              "",
              "* Durante uma operação de pull, os commits são baixados em `o/master` e então são *mergidos* no ramo `master`. O alvo do merge é determinado a partir dessa conexão.",
              "* Durante uma operação de push, o trabalho do ramo `master` local é enviado para o ramo `master` remoto (que é representado localmente por `o/master`). O *destino* do push é determinado da conexão entre `master` e `o/master`.",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Remote tracking",
              "",
              "Resumindo a história, essa conexão entre `master` e `o/master` é explicada pela propriedade de \"remote tracking\" dos ramos. O ramo `master` é configurado para seguir o ramo `o/master` -- isso significa que existe um alvo implícito de merge e um destino implícito de push para o ramo `master`.",
              "",
              "Você pode estar se perguntando como essa propriedade foi configurada no ramo `master` se você não executou nenhum comando ordenando que isso fosse feito. Bem, quando você clona um repositório com o Git, essa propriedade é configurada para você automaticamente. ",
              "",
              "Durante a clonagem, o Git cria um ramo remoto para cada ramo que existe no repositório remoto (ou seja, ramos como o `o/master`). Ele cria então um ramo local que segue o ramo atualmente ativo no repositório remoto, que geralmente é o `master`.",
              "",
              "Uma vez que a clonagem esteja completa, você terá apenas um único ramo local (para que você não seja sobrecarregado), mas você pode ver todos os ramos diferentes que existem no repositório remoto (caso você esteja curioso). É o melhor dos dois mundos!",
              "",
              "Isso também explica porque você vê a seguinte mensagem quando clona um repositório:",
              "",
              "    local branch \"master\" set to track remote branch \"o/master\""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Posso eu mesmo especificar isso?",
              "",
              "Sim, você pode! Você pode fazer com que qualquer ramo arbitrário siga o `o/master`, e se você fizer isso, esse ramo terá o mesmo destino de push implícito que e o mesmo alvo de merge que o `master`. Isso significa que você pode executar `git push` em um ramo chamado `realmenteNaoSouOMaster` e ainda assim ter seu trabalho enviado ao ramo `master` do repositório remoto!",
              "",
              "Há duas formas de configurar essa propriedade. A primeira consiste em fazer checkout de um novo ramo usando o ramo remoto como especificação de referência. Executar",
              "",
              "`git checkout -b realmenteNaoSouOMaster o/master`",
              "",
              "Cria um novo ramo chamado `realmenteNaoSouOMaster` e o configura para seguir o `o/master`."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Já foi conversa o suficiente, vamos ver uma demonstração! Vamos fazer checkout de um novo ramo chamado `foo` e configurá-lo para seguir o `master` do repositório remoto."
            ],
            "afterMarkdowns": [
              "Como você pode ver, usamos o alvo implícito de merge do `o/master` para atualizar o ramo `foo`. Veja como o master local não sofreu atualização!!"
            ],
            "command": "git checkout -b foo o/master; git pull",
            "beforeCommand": "git clone; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Isso também se aplica ao git push"
            ],
            "afterMarkdowns": [
              "Boom. Nós enviamos nosso trabalho para o ramo remoto `master` ainda que nosso ramo local tivesse um nome completamente diferente"
            ],
            "command": "git checkout -b foo o/master; git commit; git push",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Forma #2",
              "",
              "Outra maneira de configurar remote tracking em um ramo é utilizando `git branch -u`. Executando",
              "",
              "`git branch -u o/master foo`",
              "",
              "configuraremos o ramo local `foo` para seguir o `o/master`. Se `foo` for o que estiver atualmente em checkout, você pode inclusive omiti-lo:",
              "",
              "`git branch -u o/master`",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vejamos outra forma realmente rápida de configurar remote tracking..."
            ],
            "afterMarkdowns": [
              "O mesmo de antes, apenas um comando mais explícito. Doce!"
            ],
            "command": "git branch -u o/master foo; git commit; git push",
            "beforeCommand": "git clone; git checkout -b foo"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok! Para este nível, vamos fazer push no ramo remoto `master` *sem estar* em um checkout do `master` local. Vou deixar você descobrir o resto, já que isto é um curso avançado :P"
            ]
          }
        }
      ]
    },
    "zh_TW": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### remote tracking branch",
              "",
              "在之前的課程中，有一件事情看起來很\"神奇\"，那就是 git 知道 `master` branch 是對應到 `o/master` branch。當然這些 branch 有類似的名稱，所以可以大概猜到， local 的 `master` branch 可以對應到 remote 的 `master branch`，但是我們是在兩種情況下可以確定有這個對應關係：",
              "",
              "* 在使用 `pull` 的時候，下載 commit 到 `o/master`，並且 `merge` 這些 commit 到 `master` branch，這就表示這個 merge 的目標是決定於這個對應關係。",
              "* 在使用 `push` 的時候，在 `master` branch 上面的 commit 被 push 到 remote 上面的 `master` branch （它在 local 被表示成 `o/master`），這就表示 push 的目標是決定於 `master` 以及 `o/master` 之間的對應關係。",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Remote tracking",
              "",
              "長話短說，我們可以用 branch 上面的 \"remote tracking\" 特性來表示介於 `master` 以及 `o/master` 的對應關係，`master` branch 被設定用來追蹤（track） `o/master`，這就表示對於 `master` branch 來說的話，有一個 merge 的目標以及 push 的目標。",
              "",
              "你可能會覺得很奇怪，當你沒有下任何指令去設定的時候，關於 `master` branch 的對應關係是如何被設定的。喔！其實當你 clone 一個 repo 的時候，其實就已經自動幫你做設定了。 ",
              "",
              "在做 clone 的時候，git 會針對每一個在 remote 上面的 branch 建立一個 branch （例如 `o/master`），之後它會建立一個 local branch 來追蹤目前在 remote 上面的 active branch，在大部份的情況下，幾乎都是設定 `master` branch。",
              "",
              "一旦 git 完成這個動作，你就只會有一個 local branch ，但是你可以看到所有在 remote 上面的不同的 branch，對於 local 和 remote 來說的話，這樣子是最好的！",
              "",
              "這也解釋了為什麼當你 clone 的時候可能會看到以下被輸出的指令：",
              "",
              "    local branch \"master\" set to track remote branch \"o/master\""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### 我可以自己設定嗎？",
              "",
              "是的你可以！你可以設定任何的 branch 來 track `o/master`， 假如你真的這麼做的話，那麼該 branch 的 push 及 merge 的目標就會跟 `master` 一樣。這就表示說你可以在 `totallyNotMaster` branch 上面執行 `git push`，並且 push 你的 commit 到 remote 的 `master` branch！",
              "",
              "有兩個方式可以設定，第一個就是藉由參考一個 remote branch 來 checkout 一個新的 branch。執行",
              "",
              "`git checkout -b totallyNotMaster o/master`",
              "",
              "建立一個新的 `totallyNotMaster` branch 並且它會 track `o/master`。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "說的好多，我們現在來看一個例子！我們會 checkout 一個新的 `foo` branch，而且該 branch 會被用來 track remote 上的 `master` branch。"
            ],
            "afterMarkdowns": [
              "就像你看到的，當 `o/master` 更新的時候，`foo` branch 也跟著一起被更新，要注意 master 並沒有被更新！"
            ],
            "command": "git checkout -b foo o/master; git pull",
            "beforeCommand": "git clone; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "同樣適用於 `git push`"
            ],
            "afterMarkdowns": [
              "哇，即使我們的 branch 名稱完全一點關係都沒有，但我們還是 push 了 commit 到 remote 的 `master` branch 上面。"
            ],
            "command": "git checkout -b foo o/master; git commit; git push",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### 方法 #2",
              "",
              "另外一個設定 remote tracking 的方法是使用 `git branch -u` 這一個指令，執行",
              "",
              "`git branch -u o/master foo`",
              "",
              "你就會看到 `foo` branch 被設定成 track `o/master`，如果你現在已經 checkout 到 foo 這個 branch 上面了，你就可以省略掉它：",
              "",
              "`git branch -u o/master`",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "我們來看這個快速設定 remote tracking 的方法..."
            ],
            "afterMarkdowns": [
              "跟之前一樣，就只是一個更加明確的指令，讚啦！"
            ],
            "command": "git branch -u o/master foo; git commit; git push",
            "beforeCommand": "git clone; git checkout -b foo"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "好！在這個關卡中，我們要 push 我們的 commit 到 remote 上面的 `master` branch，但是我們*不* checkout 到 local 的 `master` branch。因為這是一個進階的課程，所以我會讓你明白其它的東西。:P"
            ]
          }
        }
      ]
    },
   "zh_CN":{
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Remote-Tracking branches",
              "",
              "在前几节课程中有件事儿挺神奇的, Git 好像知道 `master` 与 `o/master` 是相关的. 当然, 这些分支的名字是相同的, 所以可能是这种逻辑连接了远端的 master 分支和本地的 master 分支, 其实这种连接在以下两种情况下清楚体现: ",
              "",
              "* pull 操作时, 我们下载提交到 o/master 并且合并到本地 master 分支。隐含的合并目标由此连接确定.",
              "* push 操作时, 我们把工作从 `master` 推到远端的 `master`(同时会更新远端的副本 `o/master`) 这个推送的目的地也是由这种连接确定的! ",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 远端跟踪",
              "",
              "长话短说,  `master` 和 `o/master` 的连接关系就是 分支属性\"remote tracking\" (我们叫远端跟踪好啦). `master` 被设定为跟踪 `o/master` -- 这就是隐含的合并(merge)/推送(push)目的地.",
              "",
              "你可能想知道这个属性是怎么被设定的? 你并没有用命令指定过这个属性呀! 好吧, 当你克隆仓库的时候, 这个属性就存在了. ",
              "",
              "当你克隆时, Git 会创建跟踪分支(就像 `o/master`), 对于每个远端分支, 创建一个跟踪远端分支的本地分支 (`master`), 所以你经常会看到这个的命令输出:",
              "",
              "    local branch \"master\" set to track remote branch \"o/master\"",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### 我能自己指定这个属性吗?",
              "",
              "当然可以啦! 你可以让做任意分支跟踪 `o/master`, 然后分支就会隐含 push 的 destination(`o/master`) 以及 merge 的 target (`o/master`). 这意味着你可以在分支 `totallyNotMaster` 上执行 `git push`, 将工作推送到远端的 `master`.",
              "",
              "有两种方法设置这个属性, 第一种就是通过远端分支检出一个新的分支, 执行: ",
              "",
              "`git checkout -b totallyNotMaster o/master`",
              "",
              "这样就创建了一个跟踪 `o/master` 的 新分支 `totallyNotMaster`.  "
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "说得够多了, 我们看看演示! 我们检出一个名叫 `foo` 的新分支, 然后让其跟踪远端的 `master`."
            ],
            "afterMarkdowns": [
              "正如你所看到的, 我们使用了隐含的目标 `o/master` 来更新 `foo` 分支. 注意, master 未被更新!"
            ],
            "command": "git checkout -b foo o/master; git pull",
            "beforeCommand": "git clone; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "git push 同样适用这一原则"
            ],
            "afterMarkdowns": [
              "我们将一个不叫 `master` 的分支工作推送到的远端的 `master`."
            ],
            "command": "git checkout -b foo o/master; git commit; git push",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### 方法#2",
              "",
              "另一种追踪远端分支的方法就是使用选项 : `git branch -u` . ",
              "",
              "`git branch -u o/master foo`",
              "",
              "这样 `foo` 就会跟踪 `o/master` 了. 如果你处于 foo 分支, 那么可以省略 foo",
              "",
              "`git branch -u o/master`",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "看看实际的效果..."
            ],
            "afterMarkdowns": [
              "结果跟之前一样, 这个命令的意义更精确!"
            ],
            "command": "git branch -u o/master foo; git commit; git push",
            "beforeCommand": "git clone; git checkout -b foo"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "好了! 本节我们在不检出 `master` 的情况下将工作推送到的远端的 `master`. 因为这是高级课程, 我会让你自己摸索出技巧! :P"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Remote Tracking Branches",
              "",
              "In den letzten paar Leveln wirkte es womöglich etwas \"magisch\", dass Git automatisch wusste, dass der Branch `master` irgendwie mit `o/master` verwandt ist. Klar, sie haben ähnliche Namen und daher mag es logisch erscheinen sie in Verbindung zu bringen, aber offensichtlich wird es in zwei Szenarien:",
              "",
              "* Beim `pull` werden Commits in `o/master` heruntergeladen und dann per *Merge* in den Branch `master` gebracht. Aus der Verbindung zwischen den beiden Branches leitet sich das Ziel des Merges ab.",
              "* Beim `push` werden Commits vom `master` auf den `master` auf dem Remote Server geschoben (und die Änderung _danach_ in `o/master` abgebildet). Das *Ziel* des Push wird aus der Verbindung zwischen `master` und `o/master` abgeleitet.",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Langer Rede kurzer Sinn, die Verbindung zwischen `master` und `o/master` ist einfach die Eigenschaft des \"Remote Tracking\" dieser Branches. `master` ist so eingestellt, dass er `o/master` trackt -- das heißt es gibt ein implizites Ziel für `pull` und `push` Operationen auf dem `master` Branch.",
              "",
              "Du fragst dich vielleicht wieso diese Eigenschaft auf dem `master` definiert ist, wenn du das doch gar nicht explizit gemacht hast. Naja, beim Clonen eines Repository macht Git das für den `master` automatisch.",
              "",
              "Während des Clonens erstellt Git einen Remote Branch für jeden Branch, den es auf dem Remote Server findet (also Branches wie `o/master`); dann erstellt es für den Branch, auf den auf dem entfernten Server `HEAD` zeigt (meistens `master`) automatisch einen lokalen Branch und stellt ihn so ein, dass er sein Gegenstück auf dem Server trackt. Deswegen hast du beim clonen vielleicht schon mal dies gesehen:",
              "",
              "    local branch \"master\" set to track remote branch \"o/master\""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Kann ich das auch selbst machen?",
              "",
              "Na klar! Du kannst jeden beliebigen Branch so einstellen, dass er `o/master` trackt, und wenn du das tust wird der Branch dieselben impliziten Zielangaben für `push` und `pull` haben wie `master`. Du kannst also `git push` auf dem Branch `absolut_nicht_master` ausführen und deine Commits auf `master` auf dem entfernten Server schieben lassen.",
              "",
              "Es gibt zwei Möglichkeiten diese Eigenschaft zu definieren. Die erste ist, einen neuen lokalen Branch von einem Remote Branch auszuchecken. Wenn man",
              "",
              "    git checkout -b absolut_nicht_master o/master",
              "",
              "eingibt, wir ein neuer lokaler Branch namens `absolut_nicht_master` angelegt, der `o/master` trackt."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Genug gequatscht, schauen wir uns eine Demonstration an! Wir checken einen neuen Branch `foo` aus, so dass er `master` auf dem Server trackt."
            ],
            "afterMarkdowns": [
              "Wie du siehst benutzen wir der implizite Ziel beim `pull` um `foo` zu aktualisieren. Beachte, dass `master` nicht aktualisiert wird."
            ],
            "command": "git checkout -b foo o/master; git pull",
            "beforeCommand": "git clone; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Das gilt auch für `git push`."
            ],
            "afterMarkdowns": [
              "Bämm. Wir haben unsere Commits auf den `master` auf dem Server geschoben, obwohl unser lokaler Branch völlig anders heißt."
            ],
            "command": "git checkout -b foo o/master; git commit; git push",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Methode 2",
              "",
              "Noch eine Möglichkeit um Remote Tracking auf einem Branch einzustellen, ist einfach `git branch -u` zu benutzen. Wenn man",
              "",
              "    git branch -u o/master foo",
              "",
              "eingibt, wir damit der lokale Branch `foo` so eingestellt, dass er `o/master` trackt. Den Namen des lokalen Branch kannst du auch weglassen, falls du ihn eh aktuell ausgecheckt hast:",
              "",
              "    git branch -u o/master",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Schauen wir uns auch diese Methode noch an ..."
            ],
            "afterMarkdowns": [
              "Genau wie vorher, nur ein bisschen ausführlicherer Befehl. Schick!"
            ],
            "command": "git branch -u o/master foo; git commit; git push",
            "beforeCommand": "git clone; git checkout -b foo"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok. In diesem Level muss du Commits auf den `master` auf dem Server schieben, *ohne* den lokalen `master` ausgecheckt zu haben. Den Rest kannst du selbst herausfinden, schließlich ist das hier für Fortgeschrittene. :P"
            ]
          }
        }
      ]
    },
    "ru_RU": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Удалённые-отслеживаемые ветки",
              "",
              "Единственное, что могло бы показаться Вам \"магией\" в нескольких предыдущих уроках - это то, как git знает, что ветка `master` соответствует `o/master`. Конечно, эти ветки имеют схожие имена и связь между локальной и удалённой ветками `master` выглядит вполне логично, однако, эта связь наглядно продемонстрирована в двух сценариях:",
              "",
              "* Вовремя операции pull, коммиты скачиваются в ветку `o/master` и затем *соединяются* в ветку `master`. Подразумеваемая цель слияния определяется исходя из этой связи.",
              "* Вовремя операции push, наработки из ветки `master` закачиваются на удалённую ветку `master` (которая в локальном представлении выглядит как `o/master`). *Пункт назначения* операции push определяется исходя из связи между `master` и `o/master`.",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Удалённые-отслеживаемые ветки",
              "",
              "Короче, связь между `master` и `o/master` объясняется не иначе как свойство \"удалённое отслеживание\" веток. Ветка `master` настроена так, чтобы следить за `o/master` -- это подразумевает наличие источника для merge и пункта назначения для push в контексте ветки `master`.",
              "",
              "Вы должно быть удивлены, как это отслеживание появилось на ветке `master`, если мы не запускали ни одной специфической команды. На самом деле, когда Вы клонируете репозиторий это слежение включается автоматически.",
              "",
              "В процессе клонирования, git локально создаёт удалённые ветки для каждой ветки с удалённого репозитория (такие как `o/master`). Затем он - git - создаёт локальные ветки, которые отслеживают текущую, активную ветку на удалённом репозитории. В большинстве случаев - это `master`.",
              "",
              "К тому моменту как git clone завершит своё выполнение, у Вас будет лишь одна локальная ветка (так что вы ещё не сильно перегружены), но, если Вам будет интересно, Вы сможете увидеть все удалённые ветки (при желании).",
              "",
              "Именно это объясняет, почему сразу после клонирования Вы видите в консоли надпись:",
              "",
              "    local branch \"master\" set to track remote branch \"o/master\"",
              "",
              "    (локальная ветка \"master\" теперь следит за удалённой веткой \"o/master\") "
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### А могу ли я сделать это самостоятельно?",
              "",
              "Само собой! Вы можете сказать любой из веток, чтобы она отслеживала `o/master`, и если Вы так сделаете, эта ветка будет иметь такой же пункт назначения для push и merge как и локальная ветка `master`. Это значит, что Вы можете выполнить `git push`, находясь на ветке `totallyNotMaster`, и все Ваши наработки с ветки `totallyNotMaster` будут закачены на ветку `master` удалённого репозитория!",
              "",
              "Есть два способа сделать это. Первый - это выполнить checkout для новой ветки, указав удалённую ветку в качестве ссылки. Для этого необходимо выполнить команду",
              "",
              "`git checkout -b totallyNotMaster o/master`",
              "",
              ", которая создаст новую ветку с именем `totallyNotMaster` и укажет ей следить за `o/master`."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Хватит болтовни, давайте взглянем на демонстрацию! Мы выполним checkout для новой ветки `foo` и укажем ей, чтобы она отслеживала `master` с удалённого репозитория."
            ],
            "afterMarkdowns": [
              "Как вы увидели, мы использовали `o/master` чтобы обновить ветку `foo`. Обратите внимание, как обновился master!!"
            ],
            "command": "git checkout -b foo o/master; git pull",
            "beforeCommand": "git clone; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Это работает также и для git push"
            ],
            "afterMarkdowns": [
              "Оп! Мы закачали наши наработки на ветку `master` нашего удалённого репозитория. При том, что наша локальная ветка называется абсолютно по-другому."
            ],
            "command": "git checkout -b foo o/master; git commit; git push",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Способ №2",
              "",
              "Другой способ указать ветке отслеживать удалённую ветку, это просто использовать команду `git branch -u`. Выполнив команду, ",
              "",
              "`git branch -u o/master foo`",
              "",
              "Вы укажите ветке `foo` следить за `o/master`. А если Вы ещё при этом находитесь на ветке `foo`, то её можно не указывать команде:",
              "",
              "`git branch -u o/master`",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Как видно, второй способ указать слежение за веткой намного быстрее..."
            ],
            "afterMarkdowns": [
              "Словом, всё как и раньше, просто отдельная, специальная команда. Здорово!"
            ],
            "command": "git branch -u o/master foo; git commit; git push",
            "beforeCommand": "git clone; git checkout -b foo"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Отлично! Для выполнения этого уровня давайте выполним push наших наработок в ветку `master` на удалённом репозитории при этом *не* скачивая и не создавая ветку `master` локально. Я объясню Вам оставшееся чуть позже, т.к. это продвинутый курс :P"
            ]
          }
        }
      ]
    },
    "ko": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### 원격-추적 브랜치",
              "",
              "지난 몇개의 레슨에서 \"마법\"처럼 보일 수 있는게 하나 있었는데, git이 `master`브랜치가 `o/master`와 연관 되어있는걸 안다는 것입니다. 물론 이 두 브랜치가 이름이 비슷하기 때문에 로컬 `master`브랜치가 원격의 `master`브랜치와 연결 되어있다고 하자면 어찌 논리적으로 말이 되긴 합니다만..., 이 연결은 두가지 시나리오를 통해 뚜렷하게 확인이 됩니다:",
              "",
              "* pull 작업을 하는 도중, 커밋들은 `o/master`에 내려받아 지고 그다음 `master` 브랜치로 *merge*됩니다. merge에서 내재된 타겟은 이 연결에서 결정합니다.",
              "* push 작업을 하는 도중, `master` 브랜치의 작업은 원격의 `master`브랜치(로컬에서 `o/master`로 표현되는)로 push 됩니다. push의 *목적지*는 master와 `o/master`의 연결에서 결정됩니다.",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 원격 추적",
              "",
              "간단히 말해서, 이 `master`와 `o/master`사이의 연결은 브랜치의 \"원격 추적\" 속성을 통해 간다하게 설명됩니다. `master`브랜치는 `o/master`브랜치를 추적하도록 설정되어 있습니다 -- 이것은 `master`가 merge와 push할 내재된 목적지가 생겼다는 뜻 입니다.",
              "",
              "여러분은 어떻게 이 속성을 지정해주는 그 어떤 명령어 없이 `master` 브랜치에 설정되있는지 궁금할것 입니다. 사실, 여러분이 git으로 저장소를 clone할때 이 속성이 여러분을 위해 자동으로 설정 됩니다.",
              "",
              "clone을 진행하면서 git은 원격 저장소에있는 모든 브랜치에 대해 로컬에 원격 브랜치를 생성합니다(`o/master`같은것들 말이죠). 그 후 원격 저장소에서 현재 active한 브랜치를 추적하는 로컬 브랜치를 생성합니다, 대부분의 경우 `master`가 됩니다.",
              "",
              "git clone이 완료되면, 여러분은 오로지 하나의 로컬 브랜치를 가지게 됩니다(부담스럽지 않도록) 물론 원격 저장소에있는 여러 다른 브랜치도 여전히 확인할 수 있습니다(호기심이 많으시다면). 로컬, 원격 저장소 양쪽에 최적화 되있는거죠!",
              "",
              "여러분이 clone을 할 때 아래의 명령어를 볼 수도 있는 이유입니다:",
              "",
              "    local branch \"master\" set to track remote branch \"o/master\""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### 내 스스로 지정할수도 있나요?",
              "",
              "당연하죠! 여러분은 아무 임의의 브랜치를 `o/master`를 추적하게 만들 수 있습니다. 이렇게 하면 이 브랜치 또한 내재된 push,merge 목적지를 `master`로 할 것입니다. 여러분은 이제 `totallyNotMaster`라는 브랜치에서 `git push`를 수행해서 원격 저장소의 브랜치 `master`로 작업을 push할 수 있습니다!",
              "",
              "이 속성을 설정하는데에는 두가지 방법이 있습니다. 첫 번째는 지정한 원격 브랜치를 참조해서 새로운 브랜치를 생성하여 checkout 하는 방법 입니다. 다음을 실행하면",
              "",
              "`git checkout -b totallyNotMaster o/master`",
              "",
              "`totallyNotMaster`라는 이름의 새 브랜치를 생성하고 `o/master`를 추적하게 설정합니다."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "설명은 충분히 한듯 합니다. 직접 확인해 봅시다! `foo`라는 이름의 새 브랜치를 checkout하고 이것을 원격 저장소의 `master`를 추적하도록 설정하겠습니다."
            ],
            "afterMarkdowns": [
              "보이듯이, 우리는 `o/master`를 `foo` 브랜치를 갱신하기 위한 내재된 merge 타겟으로 사용하고 있습니다. master가 갱신되지 않는다는것을 눈치챘죠?"
            ],
            "command": "git checkout -b foo o/master; git pull",
            "beforeCommand": "git clone; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "git push에도 적용이 됩니다"
            ],
            "afterMarkdowns": [
              "Boom. 브랜치의 이름을 전혀 다른것으로 지었는데도 불구하고 우리 작업이 `master`로 push 되었습니다."
            ],
            "command": "git checkout -b foo o/master; git commit; git push",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### 방법 #2",
              "",
              "브랜치에 원격 추적 설정을 하는 또 다른 방법으로는 간단하게 `git branch -u` 옵션을 사용하는 방법이 있습니다. 다음을 실행하면",
              "",
              "`git branch -u o/master foo`",
              "",
              "가 `foo` 브랜치가 `o/master`를 추적하도록 설정합니다. 만약 `foo`가 현재 작업하고 있는 브랜치라면 생략해도 됩니다:",
              "",
              "`git branch -u o/master`",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "자 이 다른 방법이 작동하는 모습을 확인해 봅시다..."
            ],
            "afterMarkdowns": [
              "이전과 같습니다,  좀 더 분명하게 알 수 있느 명령어죠. 좋아요!"
            ],
            "command": "git branch -u o/master foo; git commit; git push",
            "beforeCommand": "git clone; git checkout -b foo"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              " 이번 레벨에서는 로컬의 `master`브랜치가 아닌 다른 브랜치에서 작업을 원격 저장소의 `master`브랜치로 push하세요. 고급 과정이니 더 길게 설명하지는 않을게요 :p"
            ]
          }
        }
      ]
    }
  }
};
