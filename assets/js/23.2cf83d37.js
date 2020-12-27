(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{410:function(e,t,a){"use strict";a.r(t);var s=a(13),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"elastic-快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elastic-快速入门"}},[e._v("#")]),e._v(" Elastic 快速入门")]),e._v(" "),a("blockquote",[a("p",[e._v("开源协议："),a("a",{attrs:{href:"https://github.com/elastic/elasticsearch/tree/7.4/licenses/APACHE-LICENSE-2.0.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache 2.0"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"_1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[e._v("#")]),e._v(" 1. 简介")]),e._v(" "),a("h3",{attrs:{id:"_1-1-elastic-stack-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-elastic-stack-是什么"}},[e._v("#")]),e._v(" 1.1. Elastic Stack 是什么")]),e._v(" "),a("p",[a("strong",[e._v("Elastic Stack")]),e._v(" 即 "),a("strong",[e._v("ELK Stack")]),e._v("。")]),e._v(" "),a("p",[e._v("ELK 是指 Elastic 公司旗下三款产品 "),a("a",{attrs:{href:"https://www.elastic.co/cn/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElasticSearch"),a("OutboundLink")],1),e._v(" 、"),a("a",{attrs:{href:"https://www.elastic.co/cn/products/logstash",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logstash"),a("OutboundLink")],1),e._v(" 、"),a("a",{attrs:{href:"https://www.elastic.co/cn/products/kibana",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kibana"),a("OutboundLink")],1),e._v(" 的首字母组合。")]),e._v(" "),a("ul",[a("li",[e._v("Elasticsearch 是一个搜索和分析引擎。")]),e._v(" "),a("li",[e._v("Logstash 是服务器端数据处理管道，能够同时从多个来源采集数据，转换数据，然后将数据发送到诸如 Elasticsearch 等“存储库”中。")]),e._v(" "),a("li",[e._v("Kibana 则可以让用户在 Elasticsearch 中使用图形和图表对数据进行可视化。")])]),e._v(" "),a("p",[e._v("而 Elastic Stack 是 ELK Stack 的更新换代产品，最新产品引入了轻量型的单一功能数据采集器，并把它们叫做 "),a("a",{attrs:{href:"https://www.elastic.co/cn/products/beats",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beats"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"_1-2-为什么使用-elastic-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-为什么使用-elastic-stack"}},[e._v("#")]),e._v(" 1.2. 为什么使用 Elastic Stack")]),e._v(" "),a("p",[e._v("对于有一定规模的公司来说，通常会很多个应用，并部署在大量的服务器上。运维和开发人员常常需要通过查看日志来定位问题。如果应用是集群化部署，试想如果登录一台台服务器去查看日志，是多么费时费力。")]),e._v(" "),a("p",[e._v("而通过 ELK 这套解决方案，可以同时实现日志收集、日志搜索和日志分析的功能。")]),e._v(" "),a("h3",{attrs:{id:"_1-3-elastic-stack-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-elastic-stack-架构"}},[e._v("#")]),e._v(" 1.3. Elastic Stack 架构")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.elastic.co/guide/en/logstash/current/static/images/deploy3.png",alt:"img"}})]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("说明")])]),e._v(" "),a("p",[e._v("以上是 Elastic Stack 的一个架构图。从图中可以清楚的看到数据流向。")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.elastic.co/products/beats",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beats"),a("OutboundLink")],1),e._v(" 是单一用途的数据传输平台，它可以将多台机器的数据发送到 Logstash 或 ElasticSearch。但 Beats 并不是不可或缺的一环，所以本文中暂不介绍。")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.elastic.co/products/logstash",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logstash"),a("OutboundLink")],1),e._v(" 是一个动态数据收集管道。支持以 TCP/UDP/HTTP 多种方式收集数据（也可以接受 Beats 传输来的数据），并对数据做进一步丰富或提取字段处理。")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.elastic.co/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElasticSearch"),a("OutboundLink")],1),e._v(" 是一个基于 JSON 的分布式的搜索和分析引擎。作为 ELK 的核心，它集中存储数据。")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.elastic.co/products/kibana",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kibana"),a("OutboundLink")],1),e._v(" 是 ELK 的用户界面。它将收集的数据进行可视化展示（各种报表、图形化数据），并提供配置、管理 ELK 的界面。")])])])]),e._v(" "),a("h2",{attrs:{id:"_2-elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-elasticsearch"}},[e._v("#")]),e._v(" 2. ElasticSearch")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch"),a("OutboundLink")],1),e._v(" 是一个分布式、RESTful 风格的搜索和数据分析引擎，能够解决不断涌现出的各种用例。 作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。")])]),e._v(" "),a("h3",{attrs:{id:"_2-1-elasticsearch-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-elasticsearch-简介"}},[e._v("#")]),e._v(" 2.1. ElasticSearch 简介")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch"),a("OutboundLink")],1),e._v(" 基于搜索库 "),a("a",{attrs:{href:"https://github.com/apache/lucene-solr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lucene"),a("OutboundLink")],1),e._v(" 开发。ElasticSearch 隐藏了 Lucene 的复杂性，提供了简单易用的 REST API / Java API 接口（另外还有其他语言的 API 接口）。")]),e._v(" "),a("p",[e._v("ElasticSearch 可以视为一个文档存储，它"),a("strong",[e._v("将复杂数据结构序列化为 JSON 存储")]),e._v("。")]),e._v(" "),a("p",[a("strong",[e._v("ElasticSearch 是近乎于实时的全文搜素")]),e._v("，这是指：")]),e._v(" "),a("ul",[a("li",[e._v("从写入数据到数据可以被搜索，存在较小的延迟（大概是 1s）")]),e._v(" "),a("li",[e._v("基于 ES 执行搜索和分析可以达到秒级")])]),e._v(" "),a("h4",{attrs:{id:"_2-1-1-核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-核心概念"}},[e._v("#")]),e._v(" 2.1.1. 核心概念")]),e._v(" "),a("ul",[a("li",[a("strong",[a("code",[e._v("索引（Index）")])]),e._v(" 可以认为是文档（document）的优化集合。")]),e._v(" "),a("li",[e._v("每个 "),a("strong",[a("code",[e._v("文档（document）")])]),e._v(" 都是字段（field）的集合。")]),e._v(" "),a("li",[a("strong",[a("code",[e._v("字段（field）")])]),e._v(" 是包含数据的键值对。")]),e._v(" "),a("li",[e._v("默认情况下，Elasticsearch 对每个字段中的所有数据建立索引，并且每个索引字段都具有专用的优化数据结构。")]),e._v(" "),a("li",[e._v("每个索引里可以有一个或者多个类型（type）。"),a("code",[e._v("类型（type）")]),e._v(" 是 index 的一个逻辑分类，")]),e._v(" "),a("li",[e._v("当单台机器不足以存储大量数据时，Elasticsearch 可以将一个索引中的数据切分为多个 "),a("strong",[a("code",[e._v("分片（shard）")])]),e._v(" 。 "),a("strong",[a("code",[e._v("分片（shard）")])]),e._v(" 分布在多台服务器上存储。有了 shard 就可以横向扩展，存储更多数据，让搜索和分析等操作分布到多台服务器上去执行，提升吞吐量和性能。每个 shard 都是一个 lucene index。")]),e._v(" "),a("li",[e._v("任何一个服务器随时可能故障或宕机，此时 shard 可能就会丢失，因此可以为每个 shard 创建多个 "),a("strong",[a("code",[e._v("副本（replica）")])]),e._v("。replica 可以在 shard 故障时提供备用服务，保证数据不丢失，多个 replica 还可以提升搜索操作的吞吐量和性能。primary shard（建立索引时一次设置，不能修改，默认 5 个），replica shard（随时修改数量，默认 1 个），默认每个索引 10 个 shard，5 个 primary shard，5 个 replica shard，最小的高可用配置，是 2 台服务器。")])]),e._v(" "),a("h3",{attrs:{id:"_2-2-elasticsearch-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-elasticsearch-原理"}},[e._v("#")]),e._v(" 2.2. ElasticSearch 原理")]),e._v(" "),a("h4",{attrs:{id:"_2-2-1-es-写数据过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-es-写数据过程"}},[e._v("#")]),e._v(" 2.2.1. ES 写数据过程")]),e._v(" "),a("ul",[a("li",[e._v("客户端选择一个 node 发送请求过去，这个 node 就是 "),a("code",[e._v("coordinating node")]),e._v("（协调节点）。")]),e._v(" "),a("li",[a("code",[e._v("coordinating node")]),e._v(" 对 document 进行"),a("strong",[e._v("路由")]),e._v("，将请求转发给对应的 node（有 primary shard）。")]),e._v(" "),a("li",[e._v("实际的 node 上的 "),a("code",[e._v("primary shard")]),e._v(" 处理请求，然后将数据同步到 "),a("code",[e._v("replica node")]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("coordinating node")]),e._v(" 如果发现 "),a("code",[e._v("primary node")]),e._v(" 和所有 "),a("code",[e._v("replica node")]),e._v(" 都搞定之后，就返回响应结果给客户端。")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/doocs/advanced-java/raw/master/images/es-write.png",alt:"es-write"}})]),e._v(" "),a("h4",{attrs:{id:"_2-2-2-es-读数据过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-es-读数据过程"}},[e._v("#")]),e._v(" 2.2.2. es 读数据过程")]),e._v(" "),a("p",[e._v("可以通过 "),a("code",[e._v("doc id")]),e._v(" 来查询，会根据 "),a("code",[e._v("doc id")]),e._v(" 进行 hash，判断出来当时把 "),a("code",[e._v("doc id")]),e._v(" 分配到了哪个 shard 上面去，从那个 shard 去查询。")]),e._v(" "),a("ul",[a("li",[e._v("客户端发送请求到"),a("strong",[e._v("任意")]),e._v("一个 node，成为 "),a("code",[e._v("coordinate node")]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("coordinate node")]),e._v(" 对 "),a("code",[e._v("doc id")]),e._v(" 进行哈希路由，将请求转发到对应的 node，此时会使用 "),a("code",[e._v("round-robin")]),e._v(" "),a("strong",[e._v("随机轮询算法")]),e._v("，在 "),a("code",[e._v("primary shard")]),e._v(" 以及其所有 replica 中随机选择一个，让读请求负载均衡。")]),e._v(" "),a("li",[e._v("接收请求的 node 返回 document 给 "),a("code",[e._v("coordinate node")]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("coordinate node")]),e._v(" 返回 document 给客户端。")])]),e._v(" "),a("h4",{attrs:{id:"_2-2-3-写数据底层原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-写数据底层原理"}},[e._v("#")]),e._v(" 2.2.3. 写数据底层原理")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/doocs/advanced-java/raw/master/images/es-write-detail.png",alt:"es-write-detail"}})]),e._v(" "),a("p",[e._v("先写入内存 buffer，在 buffer 里的时候数据是搜索不到的；同时将数据写入 translog 日志文件。")]),e._v(" "),a("p",[e._v("如果 buffer 快满了，或者到一定时间，就会将内存 buffer 数据 "),a("code",[e._v("refresh")]),e._v(" 到一个新的 "),a("code",[e._v("segment file")]),e._v(" 中，但是此时数据不是直接进入 "),a("code",[e._v("segment file")]),e._v(" 磁盘文件，而是先进入 "),a("code",[e._v("os cache")]),e._v(" 。这个过程就是 "),a("code",[e._v("refresh")]),e._v("。")]),e._v(" "),a("p",[e._v("每隔 1 秒钟，es 将 buffer 中的数据写入一个"),a("strong",[e._v("新的")]),e._v(" "),a("code",[e._v("segment file")]),e._v("，每秒钟会产生一个"),a("strong",[e._v("新的磁盘文件")]),e._v(" "),a("code",[e._v("segment file")]),e._v("，这个 "),a("code",[e._v("segment file")]),e._v(" 中就存储最近 1 秒内 buffer 中写入的数据。")]),e._v(" "),a("p",[e._v("但是如果 buffer 里面此时没有数据，那当然不会执行 refresh 操作，如果 buffer 里面有数据，默认 1 秒钟执行一次 refresh 操作，刷入一个新的 segment file 中。")]),e._v(" "),a("p",[e._v("操作系统里面，磁盘文件其实都有一个东西，叫做 "),a("code",[e._v("os cache")]),e._v("，即操作系统缓存，就是说数据写入磁盘文件之前，会先进入 "),a("code",[e._v("os cache")]),e._v("，先进入操作系统级别的一个内存缓存中去。只要 "),a("code",[e._v("buffer")]),e._v(" 中的数据被 refresh 操作刷入 "),a("code",[e._v("os cache")]),e._v("中，这个数据就可以被搜索到了。")]),e._v(" "),a("p",[e._v("为什么叫 es 是"),a("strong",[e._v("准实时")]),e._v("的？ "),a("code",[e._v("NRT")]),e._v("，全称 "),a("code",[e._v("near real-time")]),e._v("。默认是每隔 1 秒 refresh 一次的，所以 es 是准实时的，因为写入的数据 1 秒之后才能被看到。可以通过 es 的 "),a("code",[e._v("restful api")]),e._v(" 或者 "),a("code",[e._v("java api")]),e._v("，"),a("strong",[e._v("手动")]),e._v("执行一次 refresh 操作，就是手动将 buffer 中的数据刷入 "),a("code",[e._v("os cache")]),e._v("中，让数据立马就可以被搜索到。只要数据被输入 "),a("code",[e._v("os cache")]),e._v(" 中，buffer 就会被清空了，因为不需要保留 buffer 了，数据在 translog 里面已经持久化到磁盘去一份了。")]),e._v(" "),a("p",[e._v("重复上面的步骤，新的数据不断进入 buffer 和 translog，不断将 "),a("code",[e._v("buffer")]),e._v(" 数据写入一个又一个新的 "),a("code",[e._v("segment file")]),e._v(" 中去，每次 "),a("code",[e._v("refresh")]),e._v(" 完 buffer 清空，translog 保留。随着这个过程推进，translog 会变得越来越大。当 translog 达到一定长度的时候，就会触发 "),a("code",[e._v("commit")]),e._v(" 操作。")]),e._v(" "),a("p",[e._v("commit 操作发生第一步，就是将 buffer 中现有数据 "),a("code",[e._v("refresh")]),e._v(" 到 "),a("code",[e._v("os cache")]),e._v(" 中去，清空 buffer。然后，将一个 "),a("code",[e._v("commit point")]),e._v(" 写入磁盘文件，里面标识着这个 "),a("code",[e._v("commit point")]),e._v(" 对应的所有 "),a("code",[e._v("segment file")]),e._v("，同时强行将 "),a("code",[e._v("os cache")]),e._v(" 中目前所有的数据都 "),a("code",[e._v("fsync")]),e._v(" 到磁盘文件中去。最后"),a("strong",[e._v("清空")]),e._v(" 现有 translog 日志文件，重启一个 translog，此时 commit 操作完成。")]),e._v(" "),a("p",[e._v("这个 commit 操作叫做 "),a("code",[e._v("flush")]),e._v("。默认 30 分钟自动执行一次 "),a("code",[e._v("flush")]),e._v("，但如果 translog 过大，也会触发 "),a("code",[e._v("flush")]),e._v("。flush 操作就对应着 commit 的全过程，我们可以通过 es api，手动执行 flush 操作，手动将 os cache 中的数据 fsync 强刷到磁盘上去。")]),e._v(" "),a("p",[e._v("translog 日志文件的作用是什么？你执行 commit 操作之前，数据要么是停留在 buffer 中，要么是停留在 os cache 中，无论是 buffer 还是 os cache 都是内存，一旦这台机器死了，内存中的数据就全丢了。所以需要将数据对应的操作写入一个专门的日志文件 "),a("code",[e._v("translog")]),e._v(" 中，一旦此时机器宕机，再次重启的时候，es 会自动读取 translog 日志文件中的数据，恢复到内存 buffer 和 os cache 中去。")]),e._v(" "),a("p",[e._v("translog 其实也是先写入 os cache 的，默认每隔 5 秒刷一次到磁盘中去，所以默认情况下，可能有 5 秒的数据会仅仅停留在 buffer 或者 translog 文件的 os cache 中，如果此时机器挂了，会"),a("strong",[e._v("丢失")]),e._v(" 5 秒钟的数据。但是这样性能比较好，最多丢 5 秒的数据。也可以将 translog 设置成每次写操作必须是直接 "),a("code",[e._v("fsync")]),e._v(" 到磁盘，但是性能会差很多。")]),e._v(" "),a("p",[e._v("实际上你在这里，如果面试官没有问你 es 丢数据的问题，你可以在这里给面试官炫一把，你说，其实 es 第一是准实时的，数据写入 1 秒后可以搜索到；可能会丢失数据的。有 5 秒的数据，停留在 buffer、translog os cache、segment file os cache 中，而不在磁盘上，此时如果宕机，会导致 5 秒的"),a("strong",[e._v("数据丢失")]),e._v("。")]),e._v(" "),a("p",[a("strong",[e._v("总结一下")]),e._v("，数据先写入内存 buffer，然后每隔 1s，将数据 refresh 到 os cache，到了 os cache 数据就能被搜索到（所以我们才说 es 从写入到能被搜索到，中间有 1s 的延迟）。每隔 5s，将数据写入 translog 文件（这样如果机器宕机，内存数据全没，最多会有 5s 的数据丢失），translog 大到一定程度，或者默认每隔 30mins，会触发 commit 操作，将缓冲区的数据都 flush 到 segment file 磁盘文件中。")]),e._v(" "),a("blockquote",[a("p",[e._v("数据写入 segment file 之后，同时就建立好了倒排索引。")])]),e._v(" "),a("h4",{attrs:{id:"_2-2-4-删除-更新数据底层原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-删除-更新数据底层原理"}},[e._v("#")]),e._v(" 2.2.4. 删除/更新数据底层原理")]),e._v(" "),a("p",[e._v("如果是删除操作，commit 的时候会生成一个 "),a("code",[e._v(".del")]),e._v(" 文件，里面将某个 doc 标识为 "),a("code",[e._v("deleted")]),e._v(" 状态，那么搜索的时候根据 "),a("code",[e._v(".del")]),e._v(" 文件就知道这个 doc 是否被删除了。")]),e._v(" "),a("p",[e._v("如果是更新操作，就是将原来的 doc 标识为 "),a("code",[e._v("deleted")]),e._v(" 状态，然后新写入一条数据。")]),e._v(" "),a("p",[e._v("buffer 每 refresh 一次，就会产生一个 "),a("code",[e._v("segment file")]),e._v("，所以默认情况下是 1 秒钟一个 "),a("code",[e._v("segment file")]),e._v("，这样下来 "),a("code",[e._v("segment file")]),e._v(" 会越来越多，此时会定期执行 merge。每次 merge 的时候，会将多个 "),a("code",[e._v("segment file")]),e._v(" 合并成一个，同时这里会将标识为 "),a("code",[e._v("deleted")]),e._v(" 的 doc 给"),a("strong",[e._v("物理删除掉")]),e._v("，然后将新的 "),a("code",[e._v("segment file")]),e._v(" 写入磁盘，这里会写一个 "),a("code",[e._v("commit point")]),e._v("，标识所有新的 "),a("code",[e._v("segment file")]),e._v("，然后打开 "),a("code",[e._v("segment file")]),e._v(" 供搜索使用，同时删除旧的 "),a("code",[e._v("segment file")]),e._v("。")]),e._v(" "),a("h4",{attrs:{id:"_2-2-5-底层-lucene"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-5-底层-lucene"}},[e._v("#")]),e._v(" 2.2.5. 底层 lucene")]),e._v(" "),a("p",[e._v("简单来说，lucene 就是一个 jar 包，里面包含了封装好的各种建立倒排索引的算法代码。我们用 Java 开发的时候，引入 lucene jar，然后基于 lucene 的 api 去开发就可以了。")]),e._v(" "),a("p",[e._v("通过 lucene，我们可以将已有的数据建立索引，lucene 会在本地磁盘上面，给我们组织索引的数据结构。")]),e._v(" "),a("h4",{attrs:{id:"_2-2-6-倒排索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-6-倒排索引"}},[e._v("#")]),e._v(" 2.2.6. 倒排索引")]),e._v(" "),a("p",[e._v("在搜索引擎中，每个文档都有一个对应的文档 ID，文档内容被表示为一系列关键词的集合。例如，文档 1 经过分词，提取了 20 个关键词，每个关键词都会记录它在文档中出现的次数和出现位置。")]),e._v(" "),a("p",[e._v("那么，倒排索引就是"),a("strong",[e._v("关键词到文档")]),e._v(" ID 的映射，每个关键词都对应着一系列的文件，这些文件中都出现了关键词。")]),e._v(" "),a("p",[e._v("举个栗子。")]),e._v(" "),a("p",[e._v("有以下文档：")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("DocId")]),e._v(" "),a("th",[e._v("Doc")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("谷歌地图之父跳槽 Facebook")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("谷歌地图之父加盟 Facebook")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("谷歌地图创始人拉斯离开谷歌加盟 Facebook")])]),e._v(" "),a("tr",[a("td",[e._v("4")]),e._v(" "),a("td",[e._v("谷歌地图之父跳槽 Facebook 与 Wave 项目取消有关")])]),e._v(" "),a("tr",[a("td",[e._v("5")]),e._v(" "),a("td",[e._v("谷歌地图之父拉斯加盟社交网站 Facebook")])])])]),e._v(" "),a("p",[e._v("对文档进行分词之后，得到以下"),a("strong",[e._v("倒排索引")]),e._v("。")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("WordId")]),e._v(" "),a("th",[e._v("Word")]),e._v(" "),a("th",[e._v("DocIds")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("谷歌")]),e._v(" "),a("td",[e._v("1,2,3,4,5")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("地图")]),e._v(" "),a("td",[e._v("1,2,3,4,5")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("之父")]),e._v(" "),a("td",[e._v("1,2,4,5")])]),e._v(" "),a("tr",[a("td",[e._v("4")]),e._v(" "),a("td",[e._v("跳槽")]),e._v(" "),a("td",[e._v("1,4")])]),e._v(" "),a("tr",[a("td",[e._v("5")]),e._v(" "),a("td",[e._v("Facebook")]),e._v(" "),a("td",[e._v("1,2,3,4,5")])]),e._v(" "),a("tr",[a("td",[e._v("6")]),e._v(" "),a("td",[e._v("加盟")]),e._v(" "),a("td",[e._v("2,3,5")])]),e._v(" "),a("tr",[a("td",[e._v("7")]),e._v(" "),a("td",[e._v("创始人")]),e._v(" "),a("td",[e._v("3")])]),e._v(" "),a("tr",[a("td",[e._v("8")]),e._v(" "),a("td",[e._v("拉斯")]),e._v(" "),a("td",[e._v("3,5")])]),e._v(" "),a("tr",[a("td",[e._v("9")]),e._v(" "),a("td",[e._v("离开")]),e._v(" "),a("td",[e._v("3")])]),e._v(" "),a("tr",[a("td",[e._v("10")]),e._v(" "),a("td",[e._v("与")]),e._v(" "),a("td",[e._v("4")])]),e._v(" "),a("tr",[a("td",[e._v("..")]),e._v(" "),a("td",[e._v("..")]),e._v(" "),a("td",[e._v("..")])])])]),e._v(" "),a("p",[e._v("另外，实用的倒排索引还可以记录更多的信息，比如文档频率信息，表示在文档集合中有多少个文档包含某个单词。")]),e._v(" "),a("p",[e._v("那么，有了倒排索引，搜索引擎可以很方便地响应用户的查询。比如用户输入查询 "),a("code",[e._v("Facebook")]),e._v("，搜索系统查找倒排索引，从中读出包含这个单词的文档，这些文档就是提供给用户的搜索结果。")]),e._v(" "),a("p",[e._v("要注意倒排索引的两个重要细节：")]),e._v(" "),a("ul",[a("li",[e._v("倒排索引中的所有词项对应一个或多个文档；")]),e._v(" "),a("li",[e._v("倒排索引中的词项"),a("strong",[e._v("根据字典顺序升序排列")])])]),e._v(" "),a("blockquote",[a("p",[e._v("上面只是一个简单的栗子，并没有严格按照字典顺序升序排列。")])]),e._v(" "),a("h2",{attrs:{id:"_3-logstash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-logstash"}},[e._v("#")]),e._v(" 3. Logstash")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/elastic/logstash",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logstash"),a("OutboundLink")],1),e._v(" 是开源的服务器端数据处理管道，能够同时从多个来源采集数据，转换数据，然后将数据发送到您最喜欢的“存储库”中。")])]),e._v(" "),a("h3",{attrs:{id:"_3-1-logstash-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-logstash-简介"}},[e._v("#")]),e._v(" 3.1. Logstash 简介")]),e._v(" "),a("p",[e._v("Logstash 可以传输和处理你的日志、事务或其他数据。")]),e._v(" "),a("p",[e._v("Logstash 是 Elasticsearch 的最佳数据管道。")]),e._v(" "),a("p",[e._v("Logstash 是插件式管理模式，在输入、过滤、输出以及编码过程中都可以使用插件进行定制。Logstash 社区有超过 200 种可用插件。")]),e._v(" "),a("h3",{attrs:{id:"_3-2-logstash-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-logstash-原理"}},[e._v("#")]),e._v(" 3.2. Logstash 原理")]),e._v(" "),a("p",[e._v("Logstash 有两个必要元素："),a("code",[e._v("input")]),e._v(" 和 "),a("code",[e._v("output")]),e._v(" ，一个可选元素："),a("code",[e._v("filter")]),e._v("。")]),e._v(" "),a("p",[e._v("这三个元素，分别代表 Logstash 事件处理的三个阶段：输入 > 过滤器 > 输出。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.elastic.co/guide/en/logstash/current/static/images/basic_logstash_pipeline.png",alt:"img"}})]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("input")]),e._v(" - 负责从数据源采集数据。")]),e._v(" "),a("li",[a("strong",[a("code",[e._v("filter")])]),e._v(" - 将数据修改为你指定的格式或内容。")]),e._v(" "),a("li",[a("strong",[a("code",[e._v("output")])]),e._v(" - 将数据传输到目的地。")])]),e._v(" "),a("p",[e._v("在实际应用场景中，通常输入、输出、过滤器不止一个。Logstash 的这三个元素都使用插件式管理方式，用户可以根据应用需要，灵活的选用各阶段需要的插件，并组合使用。")]),e._v(" "),a("h2",{attrs:{id:"_4-beats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-beats"}},[e._v("#")]),e._v(" 4. Beats")]),e._v(" "),a("blockquote",[a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/elastic/beats",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beats"),a("OutboundLink")],1),e._v(" 是安装在服务器上的数据中转代理")]),e._v("。")]),e._v(" "),a("p",[e._v("Beats 可以将数据直接传输到 Elasticsearch 或传输到 Logstash 。")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.elastic.co/guide/en/beats/libbeat/current/images/beats-platform.png",alt:"img"}})]),e._v(" "),a("p",[e._v("Beats 有多种类型，可以根据实际应用需要选择合适的类型。")]),e._v(" "),a("p",[e._v("常用的类型有：")]),e._v(" "),a("ul",[a("li",[e._v("**Packetbeat：**网络数据包分析器，提供有关您的应用程序服务器之间交换的事务的信息。")]),e._v(" "),a("li",[e._v("**Filebeat：**从您的服务器发送日志文件。")]),e._v(" "),a("li",[e._v("**Metricbeat：**是一个服务器监视代理程序，它定期从服务器上运行的操作系统和服务收集指标。")]),e._v(" "),a("li",[e._v("**Winlogbeat：**提供 Windows 事件日志。")])]),e._v(" "),a("h3",{attrs:{id:"_4-1-filebeat-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-filebeat-简介"}},[e._v("#")]),e._v(" 4.1. Filebeat 简介")]),e._v(" "),a("blockquote",[a("p",[a("em",[e._v("由于本人仅接触过 Filebeat，所以本文只介绍 Beats 组件中的 Filebeat")]),e._v("。")])]),e._v(" "),a("p",[e._v("相比 Logstash，FileBeat 更加轻量化。")]),e._v(" "),a("p",[e._v("在任何环境下，应用程序都有停机的可能性。 Filebeat 读取并转发日志行，如果中断，则会记住所有事件恢复联机状态时所在位置。")]),e._v(" "),a("p",[e._v("Filebeat 带有内部模块（auditd，Apache，Nginx，System 和 MySQL），可通过一个指定命令来简化通用日志格式的收集，解析和可视化。")]),e._v(" "),a("p",[e._v("FileBeat 不会让你的管道超负荷。FileBeat 如果是向 Logstash 传输数据，当 Logstash 忙于处理数据，会通知 FileBeat 放慢读取速度。一旦拥塞得到解决，FileBeat 将恢复到原来的速度并继续传播。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.elastic.co/guide/en/beats/filebeat/current/images/filebeat.png",alt:"img"}})]),e._v(" "),a("h3",{attrs:{id:"_4-2-filebeat-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-filebeat-原理"}},[e._v("#")]),e._v(" 4.2. Filebeat 原理")]),e._v(" "),a("p",[e._v("Filebeat 有两个主要组件：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("harvester")]),e._v("：负责读取一个文件的内容。它会逐行读取文件内容，并将内容发送到输出目的地。")]),e._v(" "),a("li",[a("code",[e._v("prospector")]),e._v("：负责管理 harvester 并找到所有需要读取的文件源。比如类型是日志，prospector 就会遍历制定路径下的所有匹配要求的文件。")])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("filebeat.prospectors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" log\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" /var/log/"),a("span",{pre:!0,attrs:{class:"token important"}},[e._v("*.log")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" /var/path2/"),a("span",{pre:!0,attrs:{class:"token important"}},[e._v("*.log")]),e._v("\n")])])]),a("p",[e._v("Filebeat 保持每个文件的状态，并经常刷新注册表文件中的磁盘状态。状态用于记住 harvester 正在读取的最后偏移量，并确保发送所有日志行。")]),e._v(" "),a("p",[e._v("Filebeat 将每个事件的传递状态存储在注册表文件中。所以它能保证事件至少传递一次到配置的输出，没有数据丢失。")]),e._v(" "),a("h2",{attrs:{id:"_5-运维"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-运维"}},[e._v("#")]),e._v(" 5. 运维")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nosql/elasticsearch/elastic/nosql/elasticsearch/elasticsearch-ops.html"}},[e._v("ElasticSearch 运维")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nosql/elasticsearch/elastic/nosql/elasticsearch/elastic/elastic-logstash-ops.mdstic/elastic-logstash-ops.html"}},[e._v("Logstash 运维")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nosql/elasticsearch/elastic/nosql/elasticsearch/elastic/elastic-kibana-ops.mdlastic/elastic-kibana-ops.html"}},[e._v("Kibana 运维")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nosql/elasticsearch/elastic/nosql/elasticsearch/elastic/elastic-beats-ops.mdelastic/elastic-beats-ops.html"}},[e._v("Beats 运维")])],1)]),e._v(" "),a("h2",{attrs:{id:"_6-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-参考资料"}},[e._v("#")]),e._v(" 6. 参考资料")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("官方资源")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.elastic.co/cn/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch 官网"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch Github"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch 官方文档"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.elastic.co/cn/products/logstash",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logstash 官网"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/elastic/logstash",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logstash Github"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/current/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logstash 官方文档"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.elastic.co/cn/products/kibana",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kibana 官网"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/elastic/kibana",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kibana Github"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/kibana/current/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kibana 官方文档"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.elastic.co/cn/products/beats",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beats 官网"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/elastic/beats",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beats Github"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/libbeat/current/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beats 官方文档"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("strong",[e._v("文章")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.elastic.co/cn/what-is/elk-stack",target:"_blank",rel:"noopener noreferrer"}},[e._v("什么是 ELK Stack？"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/es-introduction.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/es-introduction.md"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/doocs/advanced-java/blob/master/docs/high-concurrency/es-write-query-search.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("es-write-query-search"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);