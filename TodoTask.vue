<template>
	<div>
		this is Todo Task without store.......
		<input
			v-model="task"
			type="text"
		/>
		<button @click="addTask()">
			Add Task
		</button>
		<button
			:disabled="listTask.length === 0"
			@click="deleteTaskList()"
		>
			Delete
		</button>
		<div
			v-for="(createdTask,index) in listTask"
			:key="index"
		>
			<div style="border:1px solid red;width: 260px;height: 100px">
				{{ createdTask }}
				<input
					:style="{display: editDisplay[createdTask]? 'block':'none' }"
					type="text"
					v-model="updateTaskVal"
				/>
				<button
					:style="{display: editDisplay[createdTask]? 'none':'block' }"
					@click="editTask(createdTask)"
				>
					edit
				</button>
				<button
					:style="{display: editDisplay[createdTask]? 'block':'none' }"
					@click="updateTask(index)"
				>
					update
				</button>
				<button @click="removeTask(createdTask)">
					remove
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Demo',
	data() {
		return {
			task: '',
			listTask: [],
			updateTaskVal: '',
			editDisplay: {},
			updatedTaskList: '',
		};
	},
	methods: {
		addTask() {
			this.listTask.push(this.task);
			this.task = '';
		},
		editTask(createdTaskVal) {
			this.editDisplay = { ...this.editDisplay, [createdTaskVal]: true };
		},
		updateTask(index) {
			this.updatedTaskList = [...this.listTask];
			this.updatedTaskList[index] = this.updateTaskVal;
			this.listTask = this.updatedTaskList;
			this.updateTaskVal = '';
		},
		removeTask(createdTaskVal) {
			this.listTask = this.listTask.filter((elem) => elem !== createdTaskVal);
		},
		deleteTaskList() {
			this.listTask = '';
		},
	},
};
</script>

<style scoped lang="scss">

</style>
