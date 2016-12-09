/**
 * Created by youhandan on 2016/12/5.
 */

export const staffFormValidation = ({name, age}) => {
    if (name === '') return '名字不能为空'
    else if (age === '') return '年龄不能为空'
    else if (!/^\d+$/.test(age) || age > 150) return '年龄为0~150的整数'
    else return ''
}