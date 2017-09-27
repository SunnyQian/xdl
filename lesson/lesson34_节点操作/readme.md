# 复习

# js DOM 节点


## 节点树  (倒树)

### 节点类型  nodeType
```
	元素节点	1
	属性节点	2
	文本节点	3

	注释节点	8
	文档节点	9
```

### 节点的名称 nodeName

### 节点的值 nodeValue

### 节点的关系
```
父节点			parentNode
子节点			childNodes
第一个儿子		firstChild
最后一个儿子	lastChild
上一个同胞		previousSibling
下一个同胞		nextSibling

第一个元素节点  firstElementChild   // IE 8 和 以下
最后一个元素节点  lastElementChild   // IE 8 和 以下

```

Box.appendChild(aObj);

// 删除指定的子节点
removeChild();

兼容性