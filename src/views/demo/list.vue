<template>
    <div>
        <div>
            <el-button @click='handleCreate()'>新增用户</el-button>
        </div>
        <el-table
                :data="users"
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="addr"
                    label="地址">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="delUser(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>



        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                :before-close="handleClose">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="addr">
                    <el-input v-model="ruleForm.addr"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
            <!--<span slot="footer" class="dialog-footer">-->
            <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
            <!--<el-button type="primary" @click="addUser">确 定</el-button>-->
          <!--</span>-->
        </el-dialog>
    </div>




</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        data(){
            return {
                obj:{},
                dialogVisible: false,
                editFlag:false,
                ruleForm: {
                    id:'',
                    name: '',
                    addr: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户姓名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    addr: [
                        { required: true, message: '请填写用户地址', trigger: 'blur' }
                    ]
                }
            }
        },
        computed: mapGetters({
            users: 'allUsers'
        }),
        methods:{
            getAllUsers(){
                this.$store.dispatch('getAllUsers')
            },
            addUser(){
                this.$store.dispatch('addUser', {name:this.obj.name , addr:this.obj.addr});
                this.dialogVisible = false;
                this.obj = {}
            },
            delUser(i){
                this.$store.dispatch( 'delUser' , i )
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                      this.dialogVisible = false;
                      this.ruleForm = {};
                    })
                    .catch(_ => {
                      this.dialogVisible = false;
                      this.ruleForm = {};
                    });
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                      if(!this.editFlag){
                        this.$store.dispatch('addUser', {name:this.ruleForm.name , addr:this.ruleForm.addr});
                      }else{
                        this.$store.dispatch('editUser', {id:this.ruleForm.id, name:this.ruleForm.name , addr:this.ruleForm.addr});
                      }
                      this.dialogVisible = false;
                      this.ruleForm = {}
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleCreate(){
              this.editFlag = false;
              this.dialogVisible = true;
            },
            handleEdit(index,row){
              this.editFlag = true;
              this.ruleForm = this.$$_.cloneDeep(row);
              this.dialogVisible = true;
            }
        },
        created(){
            this.$store.dispatch('getAllUsers')
        }
    }
</script>
