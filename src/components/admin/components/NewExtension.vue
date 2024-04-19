<style scoped>
.new-extension {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background: white;
    width: 100%;
}
</style>
<template>
    <div class="new-extension">
        <h6>I. Thêm extension</h6>
        <div class="form-send">
            <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-form-item label="Tên dự án">
                    <a-input v-model:value="formState.name" placeholder="Tên dự án" />
                </a-form-item>
                <a-form-item label="Slug:">
                    <a-input readonly v-model:value="formState.name" placeholder="Slug(Auto render)" />
                </a-form-item>
                <a-form-item label="App name:">
                    <a-input v-model:value="formState.name" placeholder="App name" />
                </a-form-item>
                <a-form-item label="Ảnh đại diện">
                    <div class="clearfix">
                        <a-upload v-model:file-list="fileList" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            list-type="picture-card" @preview="handlePreview">
                            <div v-if="fileList.length < 8">
                                <plus-outlined />
                                <div style="margin-top: 8px">Upload</div>
                            </div>
                        </a-upload>
                        <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
                            <img alt="example" style="width: 100%" :src="previewImage" />
                        </a-modal>
                    </div>
                </a-form-item>
                <a-form-item label="Danh sách ảnh slide">
                    <div class="clearfix">
                        <a-upload v-model:file-list="fileList" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            list-type="picture-card" @preview="handlePreview">
                            <div v-if="fileList.length < 8">
                                <plus-outlined />
                                <div style="margin-top: 8px">Upload</div>
                            </div>
                        </a-upload>
                        <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
                            <img alt="example" style="width: 100%" :src="previewImage" />
                        </a-modal>
                    </div>
                </a-form-item>
                <a-form-item label="Link tải Zip:">
                    <a-input v-model:value="formState.name" placeholder="Link tải Zip" />
                </a-form-item>
                <a-form-item label="Link cửa hàng:">
                    <a-input v-model:value="formState.name" placeholder="Link tải Zip" />
                </a-form-item>
                <a-form-item label="Mô tả ngắn:">
                    <a-input v-model:value="formState.name" placeholder="Mô tả ngắn" />
                </a-form-item>

                <a-form-item label="Mô tả chi tiết(*):">
                    <a-textarea rows="8" v-model:value="formState.desc" />
                </a-form-item>
                <a-form-item label="Kiểu">
                    <a-select ref="select" v-model:value="selectType" style="width: 120px" @change="handleChange">
                        <a-select-option v-for="item of types" :value="item.value">{{ item.title }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="Thể loại">
                    <a-select ref="select" v-model:value="selectFolder" style="width: 120px" @change="handleChange">
                        <a-select-option v-for="item of folders" :value="item.value">{{ item.title }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="Trình duyệt">
                    <a-select ref="select" v-model:value="selectBrower" style="width: 120px" @change="handleChange">
                        <a-select-option v-for="item of browers" :value="item.value">{{ item.title }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="Video(nếu có): ">
                    <a-input v-model:value="formState.fieldA" placeholder="video url" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                    <a-button type="primary" @click="onSubmit">Gửi đi</a-button>
                    <a-button style="margin-left: 10px">Hủy</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, reactive, toRaw } from 'vue';

const formState = reactive({
    name: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
});
const onSubmit = () => {
    console.log('submit!', toRaw(formState));
};
const labelCol = {
    style: {
        width: '150px',
    },
};
const wrapperCol = {
    span: 14,
};
//-----------------------------
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');
const fileList = ref([
]);
const handleCancel = () => {
    previewVisible.value = false;
    previewTitle.value = '';
};
const handlePreview = async file => {
    if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
    }
    previewImage.value = file.url || file.preview;
    previewVisible.value = true;
    previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};



const types = ref([
  { title: "Tất cả", value: "" },
  { title: "Extension", value: "extension" },
  { title: "Phần mềm", value: "soft" }
])
const selectType = ref("")
const folders = ref([
  { title: "Tất cả", value: "" },
  { title: "Facebook", value: "facebook" },
  { title: "Tiktok", value: "tiktok" },
  { title: "Amazon", value: "amazon" },
  { title: "Khác", value: "orther" }
])
const selectFolder = ref("")
const browers = ref([
  { title: "Tất cả", value: "" },
  { title: "Chrome", value: "chrome" },
  { title: "Firefox", value: "firefox" }
])
const selectBrower = ref("")

</script>